function Editreviewctrl () {
}

Editreviewctrl.prototype._new = function(id) {
  this.id = id;
  $.getJSON("subject.php", { method: "getTitle",id:this.id }, function(json){
    for(var s of json){
      $('#subjects').append(s);
    }
  });
}

Editreviewctrl.prototype.edit = function(id) {
  this.id = id;
  $.getJSON("subject.php", { method: "getTitle",id:this.id }, function(json){
    for(var s of json){
      $('#subjects').append(s);
    }
  });
}

Editreviewctrl.prototype.save = function(id, _text) {
  this.id = id;
  this._text = _text;
  window.location.href = 'subjectlist.html';
}

Editreviewctrl.prototype.cancel = function() {
  window.location.href = 'subjectlist.html';
}

$(function(){
  var er = new Editreviewctrl();
  var TransitionSource = document.referrer;
  if (TransitionSource == 'showreview.html') {
    er.edit(1);
  } else {
    er._new(1);
  }
  document.getElementById("save").onclick = function() {
  er.save();
  };
	document.getElementById("cancel").onclick = function() {
  er.cancel();
  };
});
