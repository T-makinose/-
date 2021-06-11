function Maketimetable () {
}

Maketimetable.prototype.maketimetable = function() {
  $.getJSON("student.php", { method: "subjects" }, function(json){
    for(var s of json){
      $('#subjects').append('<li>'+s+'</li>');
	  }
	});
}

$(function(){
  var mt = new Maketimetable();
  mt.maketimetable();
});
