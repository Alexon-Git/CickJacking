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