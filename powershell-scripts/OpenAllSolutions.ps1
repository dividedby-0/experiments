# Apre tutti i file .sln (solution) contenuti nella cartella, cercandoli in ogni sottocartella
function openAllSolutionsInSubdir {
    $slnFiles = Get-ChildItem -Path . -Filter "*.sln" -File -Recurse

    foreach ($slnFile in $slnFiles) {
	Write-Host "Opening $($slnFile.FullName)"
        Invoke-Item $slnFile.FullName
        Start-Sleep -Seconds 20
    }
}

Set-Alias -Name openall -Value openAllSolutionsInSubdir