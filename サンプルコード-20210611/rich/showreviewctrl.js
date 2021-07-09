function Showreviewctrl (){
}

Showreviewctrl.prototype.show = function(id) {
  this.id = id;

  $.getJSON("student.php",{method:"subjets"},function(){
    for(var s of json){
        $('#subjects').append('<li>'+s+'</li>');
    }
});
}

Showreviewctrl.prototype.edit = function(id) {
  this.id = id;
  window.location.href = 'editreview.html';

  $.getJSON("subject.php", { method: "getTitle" }, function(json){
    for(var s of json){
      $('#subjects').append('<li>'+s+'</li>');
    }
  });

}

Showreviewctrl.prototype.close = function(id, txt) {
  window.location.href = 'subjectlist.html';
}

$(function(){
  var shre = new Showreviewctrl();
  var TransitionSource = document.referrer;

  if (TransitionSource = 'subjectlist.html') {
    shre.show();
  } else {
    shre.edit();
  }

  document.getElementById("edit").onclick = function() {
    shre.edit();
  };

  document.getElementById("_close").onclick = function() {
    shre.close();
  };
});