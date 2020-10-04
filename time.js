// Text refrences
var timeDisplay = document.querySelector("#time")
var textDisplay = document.querySelector("#text")
var linkDisplay = document.querySelector("#link")
var prevDisplay = document.querySelector("#prev")

function check(){
    // Match schedule to sequence according to day of week
    var sequence = sequenceCheck()

    // Loop through sequence to find if current time is on schedule
    for(var i=0; i < sequence.length; i++){
        // Check if 1 minute after opened to re-enable opening
        if(sequence[i][1] != 59){
            if(time[0] == sequence[i][0] && time[1] == sequence[i][1] + 1){
                opened = false 
            }
        } else{
            if(time[0] == sequence[i][0] + 1 && time[1] == 0){
                opened = false
            }
        }

        // If time on schedule and not repeating, open link
        if(time[0] == sequence[i][0] && time[1] == sequence[i][1] && !opened){
            window.open(periods[i][1])
            opened = true
            currentPeriod = i

            nextPeriod++
            while(sequence[nextPeriod][0] == undefined){
                nextPeriod++
            }

            currentPeriod = (nextPeriod - 1)
            while(sequence[currentPeriod][0] == undefined){
                currentPeriod--
            }

            console.log("current: " + currentPeriod)
            console.log("next: " + nextPeriod)
        }
    }

    timeTillNextPeriod = [
        sequence[nextPeriod][0] - time[0],
        sequence[nextPeriod][1] - time[1] - 1,
        60 - time[2]
    ]

    var timePastPreviousPeriod = [
        time[0] - sequence[currentPeriod][0],
        Math.abs(sequence[currentPeriod][1] - time[1]),
        time[2]
    ]

    var hrmin = convertToReadableTime(timeTillNextPeriod[0], timeTillNextPeriod[1])
    timeDisplay.innerHTML = hrmin + ":" + timeTillNextPeriod[2]
    textDisplay.innerHTML = "Until next period (" + periods[nextPeriod][0] + ")"
    textDisplay.setAttribute("href", periods[nextPeriod][1])

    prevDisplay.innerHTML = periods[currentPeriod][0] + " started " + timePastPreviousPeriod[0] + ":" + timePastPreviousPeriod[1] + ":" + timePastPreviousPeriod[2] + " ago"
    prevDisplay.setAttribute("href", periods[currentPeriod][1])
}