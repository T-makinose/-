<?php
header('content-type: application/json; charset=utf-8');

class Subject {
  
  private $id;
  private $title;
  
  public static function getTitle($id){
    $title=['情報ネットワーク','HCI基礎論','モバイルシステム技術論','論理回路','情報理論'];
    return $title[$id];
  }
  
}

$sj = new Subject();

if($_GET['method'] === "getTitle"){
  echo json_encode($sj->getTitle($_GET['id']));
}else{
  echo json_encode(array('error'=>"unknown_method"));
}
exit();
?>
