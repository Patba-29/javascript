<?php
    $conn=NULL;
    try{
        $conn=new PDO("mysql:host=localhost; dbname=mycms; charset=utf8",'root','');
        if(isset($_GET['id_usuario'])){
            $id=$_GET['id_usuario'];
            $sql="select *from users where id_usuario=$id";
        }else{
            $sql="select *from users";
        }
        $stm=$conn->prepare($sql);
        $stm->execute();
        $resultSet=$stm->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($resultSet);
    }catch(PDOException $e){
        echo "Error".$e->getMessage();
    }
?>

