// Print Window Option
function myFunction() {
    window.print();
  }

// Exit Browser Window Option
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
