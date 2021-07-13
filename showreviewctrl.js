function Showreviewctrl (){
}

Showreviewctrl.prototype.show = function(id) {
  this.id = id;

  $.getJSON("subject.php", { method: "getTitle",id:this.id }, function(json){
    for(var s of json){
      $('#subjects').append(s);
    }
  });

  /*$.getJSON("student.php",{method:"subjects"},function(json){
    for(var s of json){
        $('#subjects').append('<li>'+s+'</li>');
    }
});*/
}

Showreviewctrl.prototype.edit = function(id) {
  this.id = id;
  window.location.href = 'editreview.html';

  $.getJSON("subject.php", { method: "getTitle",id:this.id}, function(json){
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
	
  var url = new URL(window.location.href);
  var idParams = url.searchParams.get('id');

  shre.show(idParams);

  document.getElementById("edit").onclick = function() {
    shre.edit(idParams);
  };

  document.getElementById("_close").onclick = function() {
    shre.close();
  };
});