<?php

include("config.php");

header("Content-Type: application/json;charset=UTF-8");

header("Access-Control-Allow-Origin: http://localhost:5173");

header("Access-Control-Allow-Methods: GET,OPTIONS");

header("Access-Control-Allow-Credentials: true");

header("Access-Control-Allow-Headers:Content-Type");

if($_SERVER['REQUEST_METHOD'] =='OPTIONS'){

    http_response_code(204);

    exit();

}

if($_SERVER['REQUEST_METHOD'] !=='GET'){

    http_response_code(405);

    echo json_encode([
        "success"=>false,
        "message"=>"Method not allowed",
    ]);


    exit();

}


$select_all = "SELECT COUNT(*) AS all_members FROM members_tb ";

$all_members=0;

$results = mysqli_query($connection ,$select_all);

if(!$results){
    http_response_code(500);

    echo json_encode([
        "success"=>false,
        "message"=>"Internal server error",
    ]);
}

if(mysqli_num_rows($results)>0){
    
    $row= mysqli_fetch_assoc($results);

    $all_members = $row['all_members'];

    echo json_encode([
        "success"=>true,
        "result"=>$all_members,
    ]);

    exit();




}
/*

//It members
$IT = "SELECT COUNT(*) AS it_members FROM members_tb WHERE course='Information Technology'";

$it_members=0;

$it_results = mysqli_query($connection ,$IT);

if(!$it_results){
    http_response_code(500);

    echo json_encode([
        "success"=>false,
        "message"=>"Internal server error",
    ]);
}

if(mysqli_num_rows($it_results)>0){
    
    $row= mysqli_fetch_assoc($it_results);

    $it_members = $row['it_members'];

    echo json_encode([
        "success"=>true,
        "it_course"=>$it_members,
    ]);

    exit();


}


//comp science

$csc_members = "SELECT COUNT(*) AS csc FROM members_tb WHERE course='Computer Science'";

$csc=0;

$csc_results = mysqli_query($connection ,$csc_member);

if(!$csc_result){
    http_response_code(500);

    echo json_encode([
        "success"=>false,
        "message"=>"Internal server error",
    ]);
}

if(mysqli_num_rows($csc_result)>0){
    
    $row= mysqli_fetch_assoc($csc_result);

    $csc = $row['csc'];

    echo json_encode([
        "success"=>true,
        "comp"=>$csc,
    ]);

    exit();

}*/



?>