function setInfoEditer(){
    for(let i=1; i<7; i++){
        var name = document.getElementById("classInputNameP" + i)
        var link = document.getElementById("classInputLinkP" + i)

        name.value = periods[i-1][0]
        link.value = periods[i-1][1]
    }
}

function setPeriodsEditor(sequence){
    var seq = checkSequence(sequence)[0]
    var days = checkSequence(sequence)[1]

    var dow = document.getElementById("periodInputDaysS" + sequence)
    dow.value = days

    for(let i=1; i<7; i++){
        var active = document.getElementById("periodInputActiveS" + sequence + "P" + i)
        var hour = document.getElementById("periodInputHourS" + sequence + "P" + i)
        var minute = document.getElementById("periodInputMinuteS" + sequence + "P" + i)

        hour.value = seq[i-1][0]
        minute.value = seq[i-1][1]

        if(hour.value == ""){
            active.removeAttribute("checked")
            hour.setAttribute("disabled", "")
            minute.setAttribute("disabled", "")
        }
    }
}

function save(){
    for(let i=1; i<7; i++){
        var name = document.getElementById("classInputNameP" + i)
        var link = document.getElementById("classInputLinkP" + i)

        periods[i-1][0] = name.value
        periods[i-1][1] = link.value

        for(let j=1; j<4; j++){
            var seq = checkSequence(j)[0]
            var days = checkSequence(j)[1]

            var hour = document.getElementById("periodInputHourS" + j + "P" + i)
            var minute = document.getElementById("periodInputMinuteS" + j + "P" + i)
        }
    }
    
    clearInterval(interval)
    startMain()
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

setInfoEditer()
setPeriodsEditor(1)
setPeriodsEditor(2)
setPeriodsEditor(3)
