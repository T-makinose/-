<?php
header('content-type: application/json; charset=utf-8');

class Review {

  private $subjectid = 0;
  private $text = "TestStr";
  
  public  function getText(){
    return "TestStr";
  }

  public function setText($str){
    return;
  }
  
}

$re = new Review();

if($_GET['method'] === "getText"){
  echo json_encode($re->getText());
}else if($_GET['method'] === "setText"){
  echo json_encode($re->setText());
}else{
  echo json_encode(array('error'=>"unknown_method"));
}
exit();
?>
