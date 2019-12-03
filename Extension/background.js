
console.log('background running')


//Listeners

//document.getElementsByClassName('newer_link')[0].addEventListener('click', hello)

chrome.runtime.onMessage.addListener(messageResponse);

function messageResponse(message, sender, sendResponse){
    console.log(message)
    if (message == "netTime") {
        displayNetTime();
    } else if (message == "eventTime") {
        displayEventTime();
        console.log("eventTime Message received")
    } 
}