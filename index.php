<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
require_once "congid.php";

use arku\Vk;

$vk = new Vk();

if ( empty($_GET['code'])) {
    echo "<a href='".$vk->authorizeUrl()."'>даю разрешение на авторизацию</a>";
} else{
    $data = $vk->accessToken($_GET['code']);

    echo "<pre>";
    print_r($data);
    die();
}


?>
<body>
   
</body>

</html>