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

var savebtn = document.getElementById("savebtn")
function save(){
    savebtn.innerHTML = "Saving..."

    for(let i=1; i<7; i++){
        var name = document.getElementById("classInputNameP" + i)
        var link = document.getElementById("classInputLinkP" + i)

        periods[i-1][0] = name.value
        periods[i-1][1] = link.value

        for(let j=1; j<4; j++){
            var starttimes = checkSequence(j)[0]

            var hour = document.getElementById("periodInputHourS" + j + "P" + i)
            var minute = document.getElementById("periodInputMinuteS" + j + "P" + i)

            if(hour.value == ""){
                starttimes[i-1] = []
            } else{
                starttimes[i-1][0] = hour.value
                starttimes[i-1][1] = minute.value
            }

            var daysinput = document.getElementById("periodInputDaysS" + j)
            var inputvalue = (daysinput.value.split(',').map(Number))

            if(j==1){
                primaryDays = inputvalue
            } else if(j==2){
                secondaryDays = inputvalue
            } else if(j==3){
                days3 = inputvalue
            }
        }
    }

    localStorage.setItem("periods", JSON.stringify(periods))
    localStorage.setItem("primaryDays", JSON.stringify(primaryDays))
    localStorage.setItem("secondaryDays", JSON.stringify(secondaryDays))
    localStorage.setItem("days3", JSON.stringify(days3))
    localStorage.setItem("primaryStartTimes", JSON.stringify(primaryStartTimes))
    localStorage.setItem("secondaryStartTimes", JSON.stringify(secondaryStartTimes))
    localStorage.setItem("startTimes3", JSON.stringify(startTimes3))

    savebtn.innerHTML = "Saved!"
    savebtn.setAttribute("style", "background-color:green;")
    checkPeriodInital()
}

function prepareEditor(){
    savebtn.innerHTML = "Save Changes"
    savebtn.setAttribute("style", "background-color:rgb(10, 140,200);")

    setInfoEditer()
    setPeriodsEditor(1)
    setPeriodsEditor(2)
    setPeriodsEditor(3)
}