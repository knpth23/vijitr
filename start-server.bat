@echo off
echo ========================================
echo  Starting VIJITR Local Web Server
echo ========================================
echo.
echo Server will start at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

cd /d "%~dp0"

REM Try Python 3 first
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting server with Python 3...
    python -m http.server 8000
    goto :end
)

REM Try Python 2
python2 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting server with Python 2...
    python2 -m SimpleHTTPServer 8000
    goto :end
)

REM Try py launcher
py --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting server with py launcher...
    py -m http.server 8000
    goto :end
)

echo ERROR: Python is not installed or not in PATH
echo.
echo Please install Python from: https://www.python.org/downloads/
echo.
pause

:end
