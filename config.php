<?php
require __DIR__."/autoload.php";
require_once __DIR__."/classes/vkclass.php";
require_once __DIR__."/classes/User.php";

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'eloquent',
    'username' => 'arku',
    'password' => '1234',
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prifix' => '',
]);

$capsule->setAsGlobal();

$capsule->bootEloquent();
?>