function Showreviewctrl (){
}

Showreviewctrl.prototype.show = function(id) {
  this.id = id;
}

Showreviewctrl.prototype.edit = function(id) {
  this.id = id;
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

	document.getElementById("_close()").onclick = function() {
    shre.close();
  };

  document.getElementById("edit()").onclick = function() {
    shre.edit();
    };
});