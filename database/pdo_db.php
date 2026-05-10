<?php
$pdo_host = 'mysql-vinay.alwaysdata.net';
$pdo_dbname = 'vinay_sheshield';
$pdo_user = 'vinay';
$pdo_pass = 'Vinay@1234';

try {
    $pdo = new PDO("mysql:host=$pdo_host;dbname=$pdo_dbname", $pdo_user, $pdo_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("PDO Connection failed: " . $e->getMessage());
}
?>