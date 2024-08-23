$url = "https://stoic.tekloon.net/stoic-quote"
$response = Invoke-RestMethod -Uri $url -Method Get
$quote = $response.data.quote
$author = $response.data.author

if (-not [string]::IsNullOrWhiteSpace($author)) {
    # If author is present and not empty
    Write-Output "`"$quote`" - $author"
} else {
    # If author is missing or empty
    Write-Output "`"$quote`""
}
