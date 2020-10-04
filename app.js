// Set inital time
var date = new Date()
var day = date.getDay()
var time = [date.getHours(), date.getMinutes(), date.getSeconds()]

// opened prevents repeatedly opening same link within same minute
var opened = false
var currentPeriod = 0
var nextPeriod = 0
var previousPeriod = 0
var timeTillNextPeriod = []

function sequenceCheck() {
    if(primaryDays.includes(day)){
        return primaryStartTimes
    } else if(secondaryDays.includes(day)){
        return secondaryStartTimes
    } else if(days3.includes(day)){
        return startTimes3
    }
}

function checkSequence(sequence) {
    var seq 
    var days
    if(sequence == 1){
        seq = primaryStartTimes
        days = primaryDays
    } else if(sequence == 2){
        seq = secondaryStartTimes
        days = secondaryDays
    } else{
        seq = startTimes3
        days = days3
    }
    return [seq, days]
}

function checkPeriodInital(){
    var sequence = sequenceCheck()
    var h = 0
    var m = 0

    var updated = false
    while(h != time[0] || m != time[1]){
        for(var i=sequence.length-1; i>=0; i--){
            if(sequence[i][0] == h && sequence[i][1] == m){
                currentPeriod = i
                console.log("updated to " + i)
                updated = true
            }
        }

        if(m < 59){
            m++
        } else{
            h++
            m = 0
        }

        //console.log("Test time is h" + h + " m" + m)
    }

    if(!updated){
        currentPeriod = 0
        nextPeriod = 0
    }
    
    if(currentPeriod == sequence.length-1){
        nextPeriod = 0
    } else if(updated){
        nextPeriod = currentPeriod + 1
    }

    // If next period not on schedule, push to next period
    while(sequence[nextPeriod][0] == undefined){
        nextPeriod++
    }
    while(sequence[currentPeriod][0] == undefined){ // << somethings wrong with this
        currentPeriod++
    }
    if(currentPeriod >= nextPeriod){
        currentPeriod = sequence.length-1
    }

    console.log("current: " + currentPeriod)
    console.log("next: " + nextPeriod)
}

function convertToReadableTime(hr, min){
    var newhr, newmin
    if(min < 0){
        newhr = hr - 1
        newmin = 60 + min
    } else{
        newhr = hr
        newmin = min
    }

    return newhr + ":" + newmin
}

function convertToHrmin(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return [rhours, rminutes]
}

function getPreviousSaves(){
    if(localStorage.getItem("periods") != null){
        periods = JSON.parse(localStorage.getItem("periods"))
        primaryDays = JSON.parse(localStorage.getItem("primaryDays"))
        secondaryDays = JSON.parse(localStorage.getItem("secondaryDays"))
        days3 = JSON.parse(localStorage.getItem("days3"))
        primaryStartTimes = JSON.parse(localStorage.getItem("primaryStartTimes"))
        secondaryStartTimes = JSON.parse(localStorage.getItem("secondaryStartTimes"))
        startTimes3 = JSON.parse(localStorage.getItem("startTimes3"))
    }
}

function startMain(){
    getPreviousSaves()
    // Every 1 second
    setInterval(() => {
        // Update time
        date = new Date()
        day = date.getDay()
        time = [date.getHours(), date.getMinutes(), date.getSeconds()]

        // Main function
        check()
    }, 1000);
}

checkPeriodInital()
startMain()
checkPeriodInital()