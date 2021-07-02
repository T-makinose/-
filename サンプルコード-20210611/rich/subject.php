<?php
header('content-type: application/json; charset=utf-8');

class Subject {

  private $id = 0;
  private $title = "TestTitle";
  
  public static function getTitle($id){
    return "TestStr";
  }
  
}

$sj = new Subject();

if($_GET['method'] === "getTitle"){
  echo json_encode($sj->getTitle());
}else{
  echo json_encode(array('error'=>"unknown_method"));
}
exit();
?>
