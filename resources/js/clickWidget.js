async function counter(){
    var increment = "/api/click";
    var serverResponse = await fetch(increment);
    var serverResponseJson = await serverResponse.json();
    // console.log('serverresponse: ', serverResponse);
    // console.log('serverresponse: ', serverResponseJson['clickCount']);
    document.querySelector("#counter").innerHTML = serverResponseJson['clickCount'];

}

function callCounter(){
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('post', '/api/click', true);
    xhrRequest.setRequestHeader('Content-Type', 'application/json');
    xhrRequest.send(JSON.stringify({ input: "sent"}));
}

interval = setInterval(counter, 1000);