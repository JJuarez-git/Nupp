<?php

class Connection {

    private static $db;

    public static function connect() {

        $dsn = 'mysql:host=127.0.0.1;dbname=chat_web;charset=utf8mb4';
        $user = 'root';
        $pswd = '';
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ];

        try {
            self::$db = new PDO($dsn, $user, $pswd, $options); 
        } catch (\PDOException $e) {
            echo $e->getMessage();
        }
        return self::$db;
    }
}