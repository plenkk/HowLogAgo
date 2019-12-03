function hello() {
    chrome.tabs.executeScript({
        file: 'script.js'
    });
}


document.getElementById('auto_write').addEventListener('click', hello);
//document.getElementById('network_time').addEventListener('click', network_time);
//document.getElementById('hours_ago').addEventListener('click', event_time);

function network_time() {
    //console.log("netTime()running")
    /* let userinput = select('#userinput');
     userinput.input(checkChange);
 
 */
 
     //function checkChange() {
         //send message to content script
         let params = {
             active: true,
             currentWindow: true
         }
 
         chrome.tabs.query(params, gotTabs);
 
         function gotTabs(tabs) {
             //let message = userinput.value();
             var msg = "netTime"
             chrome.tabs.sendMessage(tabs[0].id, msg);
             //console.log(msg)
         }
 
    // }
 
 
}
function event_time() {
    console.log("eventTime()running")
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        //let message = userinput.value();
        var msg = "eventTime"
        chrome.tabs.sendMessage(tabs[0].id, msg, Response);
        console.log(msg)
        console.log(Response)
    }
}