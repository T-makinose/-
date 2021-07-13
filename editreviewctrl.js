function Editreviewctrl () {
}

Editreviewctrl.prototype._new = function(id) {
  this.id = id;
  $.getJSON("subject.php", { method: "getTitle",id:this.id }, function(json){
    for(var s of json){
      $('#subjects').append(s);
    }
  });
    $.getJSON("student.php",{method:"getReviewText",id:this.id},function(json){
	  for(var s of json){
		  $('#reviewtext').append(s);
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
	
    $.getJSON("student.php",{method:"getReviewText",id:this.id},function(json){
	  for(var s of json){
		  $('#reviewtext').append(s);
	  }
  });
}

Editreviewctrl.prototype.save = function(id, _text) {
  this.id = id;
  this._text = _text;


    $.getJSON("student.php",{method:"setReviewText",id:this.id,text:this._text},function(json){
  });
	
	
	
  window.location.href = 'subjectlist.html';
}

Editreviewctrl.prototype.cancel = function() {
  window.location.href = 'subjectlist.html';
}

$(function(){
  var er = new Editreviewctrl();
  var TransitionSource = document.referrer;
  
  var url = new URL(window.location.href);
  var idParams = url.searchParams.get('id');
  var reviewText = document.getElementById('reviewtext').value;
	
  if (TransitionSource == 'showreview.html') {
    er.edit(idParams);
  } else {
    er._new(idParams);
  }
  document.getElementById("save").onclick = function() {
  er.save(idParams,reviewText);
  };
  document.getElementById("cancel").onclick = function() {
  er.cancel();
  };
});
