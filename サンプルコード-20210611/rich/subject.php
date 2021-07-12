<?php
header('content-type: application/json; charset=utf-8');

class Subject {

  private $id = 0;
  private $title = "TestTitle";
  
  public static function getTitle($id){
    $subject=['情報ネットワーク','HCI基礎論','モバイルシステム技術論','論理回路','情報理論'];
    return $subject[$id];
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
