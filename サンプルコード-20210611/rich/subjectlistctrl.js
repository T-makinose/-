function SubjectListCtrl(){
}

SubjectListCtrl.prototype.showList = function () {
  var subjectid = [];
  var subjecttitle = [];
  $.getJSON("student.php",{method:"subjects"},function(json){
    for (var s of json){
      subjectid.push(s);
    }
    for (var i = 0; i < subjectid.length; i++){
      $.getJSON("subject.php",{ method:"getTitle",id:subjectid[i] },function(json){
        for(subjecttitle of json){
          $('#subjects').append('<li>'+subjecttitle+'</li>');
        }
      });
    }
  });
}
SubjectListCtrl.prototype.show = function (id) {
  this.id = id;
  
  $.getJSON("student.php",{method:"subjects"},function(json){
    for(var s of json){
      $('#subjects').append('<li>'+s+'</li>');
    }
  });
};

/*document.write("<script src=\"editreviewctrl.js\"></script> ");*/

SubjectListCtrl.prototype.new = function (id) {
  this.id = id;
  var edc = getTitle(id);
};

$(function(){
  var slc = new SubjectListCtrl();
  var TransitionSource = document.referrer;

  slc.showList();
  /*slc.show();
  slc.new();*/
  }
});
