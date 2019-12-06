<?php
$dir = new DirectoryIterator("./components");
$files = [];
foreach ($dir as $file) {
    if ($file == "." || $file == "..") {
        continue;
    }
    array_push($files, $file->getFilename());
}
$fileList = json_encode($files);
//echo $fileList;

if (!(isset($_GET["json"]))) {
    readfile("./app.html");
} else {
    echo $fileList;
}
