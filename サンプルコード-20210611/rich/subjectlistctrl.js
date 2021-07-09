function SubjectListCtrl(){

}

SubjectListCtrl.prototype.showList = function () {
    $.getJSON("student.php",{method:"subjects"},function(json){
        for(var s of json){
            $('#subjects').append('<li>'+s+'</li>');
        }
    });

    $.getJSON("subject.php",{method:"getTitle"},function(json){
        for(var s of json){
            $('#subjects').append('<li>'+s+'</li>');
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

document.write("<script src=\"editreviewctrl.js\"></script> ");

SubjectListCtrl.prototype.new = function (id) {
    this.id = id;
    var edc = getTitle(id);
};

$(function(){
    var slc = new SubjectListCtrl();

    var TransitionSource = document.referrer;

    if (TransitionSource = 'subjectlist.html') {
        slc.showList();
        slc.show();
    } else {
        slc.new();
    }
});
