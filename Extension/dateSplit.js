function dateSplit(str) {
    var mms = str.split(" ", 1);
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var count;
    for (count = 0; count < monthNames.length; count++){
        if (mms == monthNames[count]) {
            if (monthNames[count] <10){
                var mm = "0"+count;
                console.log(mm)
                break
            } else {
                var mm = count;
                console.log(mm)
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
    console.log(y,mm,dd,h,m,s);
    var dateCon = new Date(y, mm, dd, h, m, s)
    console.log(dateCon);
    return dateCon;
}

function dateSplit2(str){
    var mms = str.split("/", 1);
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var count;
    for (count = 0; count < monthNames.length; count++){
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
    console.log(dateString)
}