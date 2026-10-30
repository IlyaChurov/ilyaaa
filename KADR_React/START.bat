@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js ne naiden. Ustanovite Node.js LTS: https://nodejs.org/
  pause
  exit /b 1
)
if not exist node_modules (
  echo Pervyi zapusk: ustanavlivayu zavisimosti...
  call npm install
  if errorlevel 1 (
    echo Oshibka npm install.
    pause
    exit /b 1
  )
)
echo Zapusk KADR React...
call npm run dev
pause
