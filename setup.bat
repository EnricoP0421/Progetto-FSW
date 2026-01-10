@echo off
echo ================================
echo   Setup Progetto FSW
echo ================================
echo.

REM Controlla se Node.js è installato
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRORE] Node.js non e' installato!
    echo Scaricalo da: https://nodejs.org
    pause
    exit /b 1
)

echo [OK] Node.js versione:
node --version
echo [OK] npm versione:
npm --version
echo.

echo Installazione dipendenze...
echo.
npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================
    echo   Installazione completata!
    echo ================================
    echo.
    echo Avvia il progetto con:
    echo    npm run dev
    echo.
) else (
    echo.
    echo [ERRORE] Errore durante l'installazione
    pause
    exit /b 1
)

pause
