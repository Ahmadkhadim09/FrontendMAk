Write-Host "🚀 Deploying MAKDEVS Frontend to Vercel..." -ForegroundColor Green

# Check if API URL is set
if (-not (Test-Path ".env.production")) {
    Write-Host "📝 Creating .env.production file..." -ForegroundColor Yellow
    @"
REACT_APP_API_URL=https://makdevs-server.onrender.com/api
"@ | Out-File -FilePath ".env.production" -Encoding UTF8
    Write-Host "✅ .env.production created" -ForegroundColor Green
}

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "🏗️ Building project..." -ForegroundColor Yellow
npm run build

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "`n✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌍 Your site is live at: https://makdevs-client.vercel.app" -ForegroundColor Cyan