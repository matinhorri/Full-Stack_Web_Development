function checkFilter() {    
    if(document.getElementById("done").checked) {
       console.log("the check mark is chose for the done");   
       document.getElementById("tablecontainer").innerHTML = "In order to best address your question, please make sure to list the specific way in which I have wronged you.";   
    }   
    else if(document.getElementById('undone').checked) {   
      console.log("the check mark is chose for the comment");  
      document.getElementById("tablecontainer").innerHTML = "In order to best address your comment, please make sure to list the specific way in which I have wronged you.";    
    }   
  }
  
  async function counter(){
    var increment = "/api/click";
    var serverResponse = await fetch(increment);
    var serverResponseJson = await serverResponse.json();
    document.querySelector("#counter").innerHTML = serverResponseJson['clickCount'];

}

function callCounter(){
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('post', '/api/click', true);
    xhrRequest.setRequestHeader('Content-Type', 'application/json');
    xhrRequest.send(JSON.stringify({ input: "sent"}));
}

interval = setInterval(counter, 1000);