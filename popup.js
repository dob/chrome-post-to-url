// This code was inspired by stack overflow post
// http://stackoverflow.com/questions/11684454/getting-the-source-html-of-the-current-page-from-chrome-extension

var postURL = "http://localhost:4567";
var redirectURL = "http://espn.go.com";

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {

	var xhttp = new XMLHttpRequest();
        xhttp.open("POST", postURL, true);
	xhttp.setRequestHeader("Content-Type", "text/plain");
        xhttp.send(request.source);
        xhttp.onload = function() {
	    // message.innerText = request.source;
	    message.innerText = "Data sent, redirecting you to the scoreboard";
	    chrome.tabs.update(sender.tab.id, {url: redirectURL});
        };
	message.innerText = "Waiting for data to send";
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;
