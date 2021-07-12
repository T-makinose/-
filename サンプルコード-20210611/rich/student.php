<?php
header('content-type: application/json; charset=utf-8');

class Student {

  private $studentNo = 0;
  private $review = ['科目0のレビューです。','科目1のレビューです。','科目2のレビューです。','科目3のレビューです。','科目4のレビューです。'];


  public function subjects() {
    return [0,1,2,3,4];
  }

  public function getReviewText($id){

    return $this->review[$id];
  }

  public function setReviewText($id,$text){
    $this->review[$id] = $text;
    return;
  }

  
}

$st = new Student();

if($_GET['method'] === "subjects"){
  echo json_encode($st->subjects());
}else if($_GET['method'] === "getReviewText"){
  echo json_encode($st->getReviewText($_GET['id']));
}else if($_GET['method'] === "setReviewText"){
  echo json_encode($st->setReviewText($_GET['id'],$_GET['text']));
}else{
  echo json_encode(array('error'=>"unknown_method"));
}
exit();
?>
