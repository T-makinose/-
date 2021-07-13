function SubjectListCtrl(){
}

SubjectListCtrl.prototype.showList = function () {
  var subjectid = [];
  var subjecttitle = [];
  var reviewText = "";
  $.getJSON("student.php",{method:"subjects"},function(json){
    for (var s of json){
      subjectid.push(s);
    }
    for (let i = 0; i < subjectid.length; i++){
      $.getJSON("subject.php",{ method:"getTitle",id:subjectid[i] },function(json){
        for(var t of json){
          subjecttitle = subjecttitle + t;
        }
		$.getJSON("student.php",{ method:"getReviewText",id:subjectid[i] },function(json){ 
		  //console.log(json);
			reviewText = json;
		});
		  console.log(reviewText);
				  				  
		if(!(reviewText === "")){	  
        console.log(subjecttitle);
        $('#subjects').append('<li><a href="http://webdesign.center.wakayama-u.ac.jp:60080/sengex2021/A/showreview.html?id=' + i + '">'+subjecttitle+'</a></li>');

		}else{
		$('#subjects').append('<li><a href="http://webdesign.center.wakayama-u.ac.jp:60080/sengex2021/A/editreview.html?id=' + i + '">'+subjecttitle+'</a></li>');
			
			
		}
		 
		          subjecttitle = [];
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
});
