<?php
   require("../connect.php");
   if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['repassword']) && isset($_POST['PIN']))
   {
    $username = htmlentities($_POST('username'));
    $password = htmlentities($_POST['password']);
    $rpassword = htmlentities($_POST['rpassword']);
    $PIN = htmlentities($_POST['PIN']);

    if($password == $rpassword)
    {
    
    }
   }




?>