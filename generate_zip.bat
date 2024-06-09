@echo off
setlocal

set "base_path=%~dp0"

"D:\Programs\7zip\7-Zip\7z.exe" a "%base_path%Dark-Mode-Wikipedia.zip" "%base_path%screenshots\" "%base_path%README.md" "%base_path%manifest.json" "%base_path%LICENSE" "%base_path%dark_wiki_icon_large.png" "%base_path%dark_wiki_icon.png" "%base_path%background.css" "%base_path%contentScript.js"

endlocal
