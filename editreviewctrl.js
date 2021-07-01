function Editreviewctrl () {
}

Editreviewctrl.prototype.nw = function(id) {
  this.id = id;
  $.getJSON("subject.php", { method: "getTitle" }, function(json){
    for(var s of json){
      $('#subjects').append('<li>'+s+'</li>');
    }
  });
}

Editreviewctrl.prototype.edit = function(id) {
  this.id = id;
  $.getJSON("subject.php", { method: "getTitle" }, function(json){
    for(var s of json){
      $('#subjects').append('<li>'+s+'</li>');
    }
  });
}

Editreviewctrl.prototype.save = function(id, txt) {
  this.id = id;
  this.txt = txt;
  window.location.href = 'subjectlist.html';
}

Editreviewctrl.prototype.cancel = function() {
  window.location.href = 'subjectlist.html';
}

$(function(){
  var er = new Editreviewctrl();
  var TransitionSource = document.referrer;
  if (TransitionSource = 'showreview.html') {
    er.edit(1);
  } else {
    er.nw();
  }
  document.getElementById("save").onclick = function() {
  er.save();
  };
	document.getElementById("cancel").onclick = function() {
  er.cancel();
  };
});
