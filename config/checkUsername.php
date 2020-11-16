<?php

require_once 'DB.php';

if(isset($_GET['user']) && !empty($_GET['user'])){

    $nombreUsuario = $_GET['user'];

    $conexion = Connection::connect();
    
    $sql = 'SELECT username FROM users WHERE username = :user';
    $stmt = $conexion->prepare($sql);
    $stmt->execute(['user' => $nombreUsuario]);

    if($stmt->fetch() != false) {
        echo 'El nombre de usuario ya esta en uso';
    }
}