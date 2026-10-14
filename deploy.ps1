# Akhil K - 1-Click GitHub Deploy Script
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   Deploy Akhil K Portfolio to GitHub" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan

$repoName = Read-Host "Enter your GitHub repository name (e.g. portfolio or akhil-portfolio)"
if (-not $repoName) {
    $repoName = "portfolio"
}

$githubUser = "akhil-anandan"
$remoteUrl = "https://github.com/$githubUser/$repoName.git"

Write-Host "`nSetting up remote origin: $remoteUrl" -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin $remoteUrl
git branch -M main

Write-Host "`nPushing code to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================================" -ForegroundColor Green
    Write-Host " Success! Code is live on GitHub:" -ForegroundColor Green
    Write-Host " https://github.com/$githubUser/$repoName" -ForegroundColor Cyan
    Write-Host " Next step: Go to https://vercel.com/new and import this repo!" -ForegroundColor Yellow
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host "`nIf the repository doesn't exist yet, please create it at:" -ForegroundColor Red
    Write-Host "https://github.com/new (Name: $repoName)" -ForegroundColor Cyan
    Write-Host "Then run this script again: .\deploy.ps1" -ForegroundColor Yellow
}
