@echo off
setlocal

set "base_path=%~dp0"

rem Set default path for 7-Zip
set "sevenzip="

rem Check common paths for 7-Zip
if exist "C:\Program Files\7-Zip\7z.exe" set "sevenzip=C:\Program Files\7-Zip\7z.exe"
if exist "C:\Program Files (x86)\7-Zip\7z.exe" set "sevenzip=C:\Program Files (x86)\7-Zip\7z.exe"
if exist "D:\Programs\7zip\7-Zip\7z.exe" set "sevenzip=D:\Programs\7zip\7-Zip\7z.exe"

rem If 7-Zip is not found, exit with error
if "%sevenzip%"=="" (
    echo 7-Zip not found. Please install 7-Zip or update the batch file with the correct path.
    exit /b 1
)

"%sevenzip%" a "%base_path%Dark-Mode-Wikipedia.zip" "%base_path%screenshots\" "%base_path%README.md" "%base_path%manifest.json" "%base_path%LICENSE" "%base_path%dark_wiki_icon_large.png" "%base_path%dark_wiki_icon.png" "%base_path%background.css" "%base_path%contentScript.js"

endlocal
