var myVideo = document.getElementById("video1");
var myVideo2 = document.getElementById("video2");
var myVideo3 = document.getElementById("video3");

var buttonYes = document.getElementById("btnYes");
var buttonNo = document.getElementById("btnNo");

function myFunction() {
    window.print();
  }

function exitFunction() {
  var txt;
  var r = confirm("Do you wish to exit this course? \nThis will close the browser window.")
  if (r == true) {
      txt = "You pressed OK!";
      window.open('','_parent','');
      window.close();
  } else {
      txt = "You pressed Cancel!";
  }

}

myVideo.autoplay = true;
myVideo.load();
myVideo.loop = true;

myVideo2.autoplay = true;
myVideo2.load();
myVideo2.loop = true;

var vid = document.getElementById("video2");
vid.volume = 0.2;

//var video = document.getElementById("video2")[4];
//video.currentTime = starttimeoffset;

//myVideo2.addEventListener('timeupdate', function () {
//if (elem.currentTime >= 6) {
//    elem.currentTime = 4;
//    elem.play();
//}
//}, false);
