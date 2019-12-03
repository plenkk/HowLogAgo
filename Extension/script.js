//Ensures page has loaded before executing
$('document').ready(function(){runScriptPls()});

//Clicking anywhere on page refreshes / runs script again
document.getElementById("content").onclick = function() {runScriptPls()};


//x = document.getElementsByClassName("newer_link")[0];
///x.parentNode.firstElementChild.innerHTML = '<a href="#" id="linkClick" class="newer_link">« newer</a>';
//document.getElementById("linkClick").onclick = function() {runScriptPls()};

function runScriptPls() {

//Array that will be used to convert abbreviation (AEST) to 'Astralia/sydney' so moment can mess with it
var tzArray =
[
    'Europe/Andorra',
    'Asia/Dubai',
    'Asia/Kabul',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    'Antarctica/Mawson',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Cordoba',
    'America/Argentina/Salta',
    'America/Argentina/Jujuy',
    'America/Argentina/Tucuman',
    'America/Argentina/Catamarca',
    'America/Argentina/La_Rioja',
    'America/Argentina/San_Juan',
    'America/Argentina/Mendoza',
    'America/Argentina/San_Luis',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Ushuaia',
    'Pacific/Pago_Pago',
    'Europe/Vienna',
    'Australia/Lord_Howe',
    'Antarctica/Macquarie',
    'Australia/Hobart',
    'Australia/Currie',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Australia/Broken_Hill',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Adelaide',
    'Australia/Darwin',
    'Australia/Perth',
    'Australia/Eucla',
    'Asia/Baku',
    'America/Barbados',
    'Asia/Dhaka',
    'Europe/Brussels',
    'Europe/Sofia',
    'Atlantic/Bermuda',
    'Asia/Brunei',
    'America/La_Paz',
    'America/Noronha',
    'America/Belem',
    'America/Fortaleza',
    'America/Recife',
    'America/Araguaina',
    'America/Maceio',
    'America/Bahia',
    'America/Sao_Paulo',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Santarem',
    'America/Porto_Velho',
    'America/Boa_Vista',
    'America/Manaus',
    'America/Eirunepe',
    'America/Rio_Branco',
    'America/Nassau',
    'Asia/Thimphu',
    'Europe/Minsk',
    'America/Belize',
    'America/St_Johns',
    'America/Halifax',
    'America/Glace_Bay',
    'America/Moncton',
    'America/Goose_Bay',
    'America/Blanc-Sablon',
    'America/Toronto',
    'America/Nipigon',
    'America/Thunder_Bay',
    'America/Iqaluit',
    'America/Pangnirtung',
    'America/Atikokan',
    'America/Winnipeg',
    'America/Rainy_River',
    'America/Resolute',
    'America/Rankin_Inlet',
    'America/Regina',
    'America/Swift_Current',
    'America/Edmonton',
    'America/Cambridge_Bay',
    'America/Yellowknife',
    'America/Inuvik',
    'America/Creston',
    'America/Dawson_Creek',
    'America/Fort_Nelson',
    'America/Vancouver',
    'America/Whitehorse',
    'America/Dawson',
    'Indian/Cocos',
    'Europe/Zurich',
    'Africa/Abidjan',
    'Pacific/Rarotonga',
    'America/Santiago',
    'America/Punta_Arenas',
    'Pacific/Easter',
    'Asia/Shanghai',
    'Asia/Urumqi',
    'America/Bogota',
    'America/Costa_Rica',
    'America/Havana',
    'Atlantic/Cape_Verde',
    'America/Curacao',
    'Indian/Christmas',
    'Asia/Nicosia',
    'Asia/Famagusta',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Copenhagen',
    'America/Santo_Domingo',
    'Africa/Algiers',
    'America/Guayaquil',
    'Pacific/Galapagos',
    'Europe/Tallinn',
    'Africa/Cairo',
    'Africa/El_Aaiun',
    'Europe/Madrid',
    'Africa/Ceuta',
    'Atlantic/Canary',
    'Europe/Helsinki',
    'Pacific/Fiji',
    'Atlantic/Stanley',
    'Pacific/Chuuk',
    'Pacific/Pohnpei',
    'Pacific/Kosrae',
    'Atlantic/Faroe',
    'Europe/Paris',
    'Europe/London',
    'Asia/Tbilisi',
    'America/Cayenne',
    'Africa/Accra',
    'Europe/Gibraltar',
    'America/Godthab',
    'America/Danmarkshavn',
    'America/Scoresbysund',
    'America/Thule',
    'Europe/Athens',
    'Atlantic/South_Georgia',
    'America/Guatemala',
    'Pacific/Guam',
    'Africa/Bissau',
    'America/Guyana',
    'Asia/Hong_Kong',
    'America/Tegucigalpa',
    'America/Port-au-Prince',
    'Europe/Budapest',
    'Asia/Jakarta',
    'Asia/Pontianak',
    'Asia/Makassar',
    'Asia/Jayapura',
    'Europe/Dublin',
    'Asia/Jerusalem',
    'Asia/Kolkata',
    'Indian/Chagos',
    'Asia/Baghdad',
    'Asia/Tehran',
    'Atlantic/Reykjavik',
    'Europe/Rome',
    'America/Jamaica',
    'Asia/Amman',
    'Asia/Tokyo',
    'Africa/Nairobi',
    'Asia/Bishkek',
    'Pacific/Tarawa',
    'Pacific/Enderbury',
    'Pacific/Kiritimati',
    'Asia/Pyongyang',
    'Asia/Seoul',
    'Asia/Almaty',
    'Asia/Qyzylorda',
    'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    'Asia/Aqtobe',
    'Asia/Aqtau',
    'Asia/Atyrau',
    'Asia/Oral',
    'Asia/Beirut',
    'Asia/Colombo',
    'Africa/Monrovia',
    'Europe/Vilnius',
    'Europe/Luxembourg',
    'Europe/Riga',
    'Africa/Tripoli',
    'Africa/Casablanca',
    'Europe/Monaco',
    'Europe/Chisinau',
    'Pacific/Majuro',
    'Pacific/Kwajalein',
    'Asia/Yangon',
    'Asia/Ulaanbaatar',
    'Asia/Hovd',
    'Asia/Choibalsan',
    'Asia/Macau',
    'America/Martinique',
    'Europe/Malta',
    'Indian/Mauritius',
    'Indian/Maldives',
    'America/Mexico_City',
    'America/Cancun',
    'America/Merida',
    'America/Monterrey',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Chihuahua',
    'America/Ojinaga',
    'America/Hermosillo',
    'America/Tijuana',
    'America/Bahia_Banderas',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Africa/Maputo',
    'Africa/Windhoek',
    'Pacific/Noumea',
    'Pacific/Norfolk',
    'Africa/Lagos',
    'America/Managua',
    'Europe/Amsterdam',
    'Europe/Oslo',
    'Asia/Kathmandu',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Auckland',
    'Pacific/Chatham',
    'America/Panama',
    'America/Lima',
    'Pacific/Tahiti',
    'Pacific/Marquesas',
    'Pacific/Gambier',
    'Pacific/Port_Moresby',
    'Pacific/Bougainville',
    'Asia/Manila',
    'Asia/Karachi',
    'Europe/Warsaw',
    'America/Miquelon',
    'Pacific/Pitcairn',
    'America/Puerto_Rico',
    'Asia/Gaza',
    'Asia/Hebron',
    'Europe/Lisbon',
    'Atlantic/Madeira',
    'Atlantic/Azores',
    'Pacific/Palau',
    'America/Asuncion',
    'Asia/Qatar',
    'Indian/Reunion',
    'Europe/Bucharest',
    'Europe/Belgrade',
    'Europe/Kaliningrad',
    'Europe/Moscow',
    'Europe/Simferopol',
    'Europe/Kirov',
    'Europe/Astrakhan',
    'Europe/Volgograd',
    'Europe/Saratov',
    'Europe/Ulyanovsk',
    'Europe/Samara',
    'Asia/Yekaterinburg',
    'Asia/Omsk',
    'Asia/Novosibirsk',
    'Asia/Barnaul',
    'Asia/Tomsk',
    'Asia/Novokuznetsk',
    'Asia/Krasnoyarsk',
    'Asia/Irkutsk',
    'Asia/Chita',
    'Asia/Yakutsk',
    'Asia/Khandyga',
    'Asia/Vladivostok',
    'Asia/Ust-Nera',
    'Asia/Magadan',
    'Asia/Sakhalin',
    'Asia/Srednekolymsk',
    'Asia/Kamchatka',
    'Asia/Anadyr',
    'Asia/Riyadh',
    'Pacific/Guadalcanal',
    'Indian/Mahe',
    'Africa/Khartoum',
    'Europe/Stockholm',
    'Asia/Singapore',
    'America/Paramaribo',
    'Africa/Juba',
    'Africa/Sao_Tome',
    'America/El_Salvador',
    'Asia/Damascus',
    'America/Grand_Turk',
    'Africa/Ndjamena',
    'Indian/Kerguelen',
    'Asia/Bangkok',
    'Asia/Dushanbe',
    'Pacific/Fakaofo',
    'Asia/Dili',
    'Asia/Ashgabat',
    'Africa/Tunis',
    'Pacific/Tongatapu',
    'Europe/Istanbul',
    'America/Port_of_Spain',
    'Pacific/Funafuti',
    'Asia/Taipei',
    'Europe/Kiev',
    'Europe/Uzhgorod',
    'Europe/Zaporozhye',
    'Pacific/Wake',
    'America/New_York',
    'America/Detroit',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Indiana/Indianapolis',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Vevay',
    'America/Chicago',
    'America/Indiana/Tell_City',
    'America/Indiana/Knox',
    'America/Menominee',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/North_Dakota/Beulah',
    'America/Denver',
    'America/Boise',
    'America/Phoenix',
    'America/Los_Angeles',
    'America/Anchorage',
    'America/Juneau',
    'America/Sitka',
    'America/Metlakatla',
    'America/Yakutat',
    'America/Nome',
    'America/Adak',
    'Pacific/Honolulu',
    'America/Montevideo',
    'Asia/Samarkand',
    'Asia/Tashkent',
    'America/Caracas',
    'Asia/Ho_Chi_Minh',
    'Pacific/Efate',
    'Pacific/Wallis',
    'Pacific/Apia',
    'Africa/Johannesburg'
];

//Grab the timezone abbreviation
var Tz = document.getElementsByClassName('dimtext')[1].innerHTML

var tz = Tz.slice(1,-1); //Timezone without brackets

var abbrArray = new Array;
var count;
var netTimeOn;
var eventTimeOn;

//This adjusts the width of the table cell
try {
    var i = document.getElementsByClassName("ft notranslate el_time")[0].setAttribute("width", "270"); 
} catch {

}

//Get Abbrevaitions using Country/city by looping array
for (count = 0; count < tzArray.length; count++) {
    abbrArray[count] = moment().tz(tzArray[count]).zoneAbbr();
    }

//Find for Timezone of network in abbreviation array
for (count = 0; count < abbrArray.length; count++) {
if (tz == abbrArray[count]) {
   var networkTime = new Date().toLocaleString("en-US", {timeZone: [tzArray[count]]}); //The network time is now this value
   break;
} else{
   //console.log("not found")
}  
} 

//Converted network date so it lets me do math on it
conNet = new Date(networkTime);

var writeOn;
var Meraki_ago_days = 0
displayEventTimeOriginal();
function displayEventTimeOriginal() {
        //remove previous text
        try {
            //console.log("1")
        for (i = 0; i < 30; i++) {
            var getEventTime = document.getElementsByClassName("ft notranslate el_time")[i].firstElementChild;
            getEventTime.parentNode.removeChild(getEventTime)
           // console.log(eventTimeOn + " Falase")
        } 
            
            eventTimeOn = false
            //console.log("4")
            //write new text
            eventWrite();
                    eventTimeOn = true;
        } catch {
            //console.log("2")
            //write new text if error thrown (because there is nothing written to begin with)
            eventWrite();
                    eventTimeOn = true; }
                    function eventWrite() {
                        for (count = 0; count < 30; count++) {
            
                            try {
                                var eventTime = dateSplit(document.getElementsByClassName('ft notranslate el_time')[count].innerHTML);
                               
                            }
                            catch {
                    
                                var eventTime = dateSplit(document.getElementsByClassName('ft notranslate el_time')[count].innerHTML);
                          
                            }
                            
                            
                            function dateSplit(str) {
                                var mms = str.split(" ", 1);
                                var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                            
                                var count;
                                for (count = 0; count < monthNames.length; count++){
                                    if (mms == monthNames[count]) {
                                        if (monthNames[count] <10){
                                            var mm = "0"+count;
                                            
                                            break
                                        } else {
                                            var mm = count;
                                            
                                            break
                                        }
                                        
                                    }
                                }
                                var d1 = str.split(" ")
                                var dd = d1[1];
                                var y = "2019"
                                var newSplit = d1[2];
                                var split = newSplit.split(":")
                                var h = split[0];
                                var m = split[1];
                                var s = split[2];
                                
                                
                                var dateCon = new Date(y, mm, dd, h, m, s)
                                
                                return dateCon;
                            }
                            
                            //Set new instances of dates so that calculation can be performed
                            conEvent = new Date(eventTime);
                            
                            var Meraki_ago_minutes = diffMath2(conNet, conEvent) // <---------------THE FINAL RESULT
                            
                            
                            if (Meraki_ago_minutes < 60); {
                                var Meraki_ago_hours = 0;
                            }
                            
                            if (Meraki_ago_minutes > 60 ); {
                                var temp = Meraki_ago_minutes / 60
                               // var Meraki_ago_hours = temp;
                              var Meraki_ago_hours = Math.abs(Math.floor(temp));

                               // Days
                              if (Meraki_ago_hours > 23){
                                var daytemp = Meraki_ago_hours / 24
                                    Meraki_ago_days = Math.abs(Math.floor(daytemp));
                              }

                            }
                            for (minCount = 0; minCount < 1000; minCount++) {
                                if (Meraki_ago_minutes > 59) {
                                    Meraki_ago_minutes = Meraki_ago_minutes - 60;
                                }
                                else{
                                    break;
                                }
                                
                            }

                            for (minCount = 0; minCount < 1000; minCount++) {
                                if (Meraki_ago_hours > 23) {
                                    Meraki_ago_hours = Meraki_ago_hours - 24;
                                }
                                else{
                                    break;
                                }
                                
                            }


                            
                            //function for difference between dates
                            function diffMath(conNet, conEvent) { 
                            var difference = (conNet.getTime() - conEvent.getTime()) / 1000; 
                            difference /= (60 * 60);
                            var diff= Math.abs(Math.round(difference));
                            //console.log(diff);
                            return diff;
                            }
                            
                            function diffMath2(conNet, conEvent) { 
                                var difference = (conNet.getTime() - conEvent.getTime()) / 1000; 
                                difference /= (60);
                                var diff= Math.abs(Math.round(difference));
                                console.log(diff);
                                return diff;
                                }
                            
                            //Display on page --> the commented out stuff here is for when the hours = 0
                            if (Meraki_ago_days !== 0 /**&& Meraki_ago_hours !== 0 **/) {

                                var i = document.getElementsByClassName("ft notranslate el_time")[count];
                                    i.insertAdjacentHTML("beforeend", "<span id='patClass;' align='right' style='color:gray;'>  (" + Meraki_ago_days + " days  " + Meraki_ago_hours + " hours " + Meraki_ago_minutes + " minutes ago) </span>")

                            } /** else if ( Meraki_ago_days !==0) {

                            var i = document.getElementsByClassName("ft notranslate el_time")[count];
                            i.insertAdjacentHTML("beforeend", "<span id='patClass;' align='right' style='color:gray;'>  (" + Meraki_ago_days + " days " + Meraki_ago_minutes + " minutes ago) </span>")
                            
                            }**/else {
                                if (Meraki_ago_hours > 0){
                                    try {
                                        var i = document.getElementsByClassName("ft notranslate el_time")[count];
                                    i.insertAdjacentHTML("beforeend", "<span id='patClass;' align='right' style='color:gray;'>  (" + Meraki_ago_hours + " hours " + Meraki_ago_minutes +" minutes ago) </span>")
                                    }
                                   catch{}
                                    //Error occurs because when there are <30 events, it tries to write on a nonexistent event. 
                                
                                }else {
                                    try{ 
                                        var i = document.getElementsByClassName("ft notranslate el_time")[count];
                                        i.insertAdjacentHTML("beforeend", "<span id='patClass;' align='right' style='color:gray;'>  (" + Meraki_ago_minutes + " minutes ago) </span>")
                                        
                                    }
                                    catch{} // will need to add try catch for the days staments, if there are <30 events that occured after 24 hours
                                    //Error occurs because when there are <30 events, it tries to write on a nonexistent event. 
                                    }
                                } }
                    }
    } 

    
netString = dateSplit2(networkTime)

//grab the event date/time and split it so i can math and convert it
function dateSplit2(str){
    var mms = str.split("/", 1);
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var count;
    for (count = 0; count <= monthNames.length; count++){
        if (mms == count) {
            var mm = monthNames[count -1]
            break;
        }
    }

    var newSplit = str.split("/");
    var day = newSplit[1]
    var newSplit = str.split(" ");
    var time = newSplit[1]
    var AMPM = newSplit[2]
    var dateString = mm + " " + day + ", " + time + " " + AMPM
    //console.log(dateString)
    return dateString;
}
//weird undefined error because element isnt found sometimes
try{
    var displayTime = document.getElementsByClassName("ft ftl  el_time ftsortable")[0];

}
catch {
  
    
}

//Display network time
displayNetworkTimeOriginal();
function displayNetworkTimeOriginal() {
        try { 
            var getNetTime = document.getElementById("patTime");
            getNetTime.parentNode.removeChild(getNetTime) // remove previous network time
            netTimeOn = false;
            displayTime.insertAdjacentHTML("beforeend", "<span id='patTime'> " + netString + " </span>")
            netTimeOn = true;
        }
        catch {
            displayTime.insertAdjacentHTML("beforeend", "<span id='patTime'> " + netString + " </span>")
            netTimeOn = true;
        }}
    
        //Not needed yet tbh --> will allow showing / hiding of the event/net times. 
/* EVERYTHING FROM HERE IS UNECCESSARY ATM */
/* EVERYTHING FROM HERE IS UNECCESSARY ATM */
/* EVERYTHING FROM HERE IS UNECCESSARY ATM */
/* EVERYTHING FROM HERE IS UNECCESSARY ATM */
/* EVERYTHING FROM HERE IS UNECCESSARY ATM */
/* EVERYTHING FROM HERE IS UNECCESSARY ATM *//* EVERYTHING FROM HERE IS UNECCESSARY ATM *//* EVERYTHING FROM HERE IS UNECCESSARY ATM */

//These are for buttons
function displayNetTime() {
  
    if (netTimeOn == true) {
    var getNetTime = document.getElementById("patTime");
    getNetTime.parentNode.removeChild(getNetTime)
    netTimeOn = false;
    //console.log(netTimeOn + " net Time False")
    }
    else {
        netTimeOn = true;
        displayTime.insertAdjacentHTML("beforeend", "<span id='patTime'> " + netString + " </span>")
    }
}

function displayEventTime() {
    if (eventTimeOn == true) {
        for (i = 0; i < 30; i++) {
            var getEventTime = document.getElementsByClassName("ft notranslate el_time")[i].firstElementChild;
            getEventTime.parentNode.removeChild(getEventTime)
            //console.log(eventTimeOn + " Falase")
        }
    eventTimeOn = false;
    //console.log(eventTimeOn + " event time false")
    }
    else {
        eventTimeOn = true;
       // console.log(eventTimeOn + "event time true")
        displayEventTimeOriginal();
    }
}

//Listeners for when doing more buttons

//document.getElementsByClassName('newer_link')[0].addEventListener('click', hello)

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    //console.log(message)
    if (message == "netTime") {
        displayNetTime();
    } else if (message == "eventTime") {
        displayEventTime();
        //console.log("eventTime Message received")
    } 
}
//End listeners

}