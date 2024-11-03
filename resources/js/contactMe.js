function checkButton() {    
  if(document.getElementById("question").checked) {
     console.log("the check mark is chose for the question");   
     document.getElementById("testiBox").innerHTML = "You chose the high Priority, Are you sure about it?";   
  }   
  else if(document.getElementById('comment').checked) {   
    console.log("the check mark is chose for the comment");  
    document.getElementById("testiBox").innerHTML = "You chose the Normal Priority";    
  }   
  else if(document.getElementById('concern').checked) { 
    console.log("the check mark is chose for the concern");    
    document.getElementById("testiBox").innerHTML = "You chose the Low Priority";     
  }   
}

function autoSeggestion(email){
  // var email = "horri031@umn.edu";
  // var temp = email.substring(0, email.indexOf('@'));
  // console.log(temp);
  if(document.getElementById("userName").checked) {
    var email = "horri031@umn.edu";
    var temp = email.substring(0, email.indexOf('@'));
    //console.log("the check mark is chose for the question");   
    document.getElementById("username").innerHTML = temp;
}
}

function alert(){
  var myText = "You SUbmitted a form, Thanks!!";
   alert (myText);
}