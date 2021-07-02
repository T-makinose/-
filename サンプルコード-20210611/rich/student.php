<?php
header('content-type: application/json; charset=utf-8');

class Student {

  private $studentNo = 0;
  
  public function subjects() {
    return [1,2,3,4,5];
  }

  public function getReviewText($id){
    return "TestStr";
  }

  public function setReviewText($id,$text){
    return;
  }

  
}

$st = new Student();

if($_GET['method'] === "subjects"){
  echo json_encode($st->subjects());
}else if($_GET['method'] === "getReviewText"){
  echo json_encode($st->getReviewText($id));
}else if($_GET['method'] === "setReviewText"){
  echo json_encode($st->setReviewText($id,$text));
}else{
  echo json_encode(array('error'=>"unknown_method"));
}
exit();
?>
