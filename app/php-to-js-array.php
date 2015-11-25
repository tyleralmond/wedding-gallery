<?php
    header('Content-Type: text/javascript; charset=UTF-8');
    echo "var images = [];\n";
    $folder = 'images/';
    $folder_full = 'images/full/';
    $all_images = glob($folder."{*.jpg, *.JPG, *.JPEG, *.png, *.PNG}", GLOB_BRACE);
    $all_full = glob($folder_full."{*.jpg, *.JPG, *.JPEG, *.png, *.PNG}", GLOB_BRACE);
    $count = count($all_images);
    for ($i = 0; $i < $count; $i++) {
        echo "images[".$i."] = {};\n";
        echo "images[".$i."].src = '".$all_images[$i]."';\n";
        echo "images[".$i."].full = '".$all_full[$i]."';\n";
        echo "images[".$i."].name = '".substr($all_images[$i],strlen($folder),strpos($all_images[$i], '.')-strlen($folder))."';\n";
        echo "images[".$i."].modified = '".date('YmdHis', filemtime($all_images[$i])).$i."';\n";
    }
?>
