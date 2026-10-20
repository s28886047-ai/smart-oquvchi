@echo off
title SMART O'QUVCHI 2.0 - Ishga tushirish
echo ========================================================
echo        SMART O'QUVCHI 2.0 - Platformani ishga tushirish
echo ========================================================
echo.
echo Brauzer ochilmoqda...
start "" "%~dp0index.html"
echo Tayyor! Agar mahalliy server orqali ishlatmoqchi bo'lsangiz:
echo powershell -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"
echo.
pause
