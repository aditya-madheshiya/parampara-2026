param(
    [string]$RepoName = "parampara-2026",
    [ValidateSet("public","private")]
    [string]$Visibility = "public",
    [string]$LocalPath = "."
)

Set-Location -Path $LocalPath

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "git is not installed. Install Git and re-run the script."
    exit 1
}

function Ensure-InitialCommit {
    try {
        git rev-parse --verify HEAD >$null 2>$null
    } catch {
        git add .
        git commit -m "Initial commit"
    }
}

if (-not (Test-Path ".git")) {
    git init
    Ensure-InitialCommit
} else {
    Ensure-InitialCommit
}

# If gh CLI is available, prefer it (handles auth interactively)
if (Get-Command gh -ErrorAction SilentlyContinue) {
    $flag = if ($Visibility -eq "public") { "--public" } else { "--private" }
    gh auth status 2>$null
    gh repo create $RepoName $flag --source=. --remote=origin --push --confirm
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Repository created and pushed using gh."
        exit 0
    } else {
        Write-Warning "gh failed to create the repository; falling back to API method."
    }
}

Write-Host "GitHub CLI not found or failed. Creating repository via GitHub REST API."

# Prompt for PAT
$secureToken = Read-Host "Enter a GitHub Personal Access Token (scopes: 'public_repo' for public, 'repo' for private)" -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)
$token = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($BSTR)

$body = @{ name = $RepoName; private = ($Visibility -eq "private") } | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Method Post -Uri 'https://api.github.com/user/repos' -Headers @{ Authorization = "token $token"; Accept = 'application/vnd.github.v3+json'; 'User-Agent' = 'PowerShell' } -Body $body
} catch {
    Write-Error "Failed to create repository via API: $_"
    exit 1
}

$cloneUrl = $response.clone_url
if (-not $cloneUrl) {
    Write-Error "Could not determine clone URL from API response."
    exit 1
}

# Add remote and push
try {
    if ((git remote) -notmatch 'origin') { git remote add origin $cloneUrl }
    git branch -M main
    git push -u origin main
    Write-Host "Pushed to $($response.html_url)"
} catch {
    Write-Error "Failed to add remote or push: $_"
    exit 1
}
