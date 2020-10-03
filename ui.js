var body = document.getElementById("main")
var modal = document.getElementById("modalcontent")
var textbox = document.getElementsByTagName("input")

function dark(){
    body.style.backgroundColor = "rgb(20, 20, 20)"
    body.style.color = "white"
    body.style.fill = "white"
}

function light(){
    body.style.backgroundColor = "white"
    body.style.color = "black"
    body.style.fill = "black"
}

var modalBody = document.getElementById("edit-body")

function createInfoEditor(){
    for(let i=1; i<7; i++){
        var container = document.createElement("div")
        var text = document.createElement("p")
        var name = document.createElement("input")
        var link = document.createElement("input")

        container.setAttribute("class", "row")
        text.innerHTML = "Period " + i
        name.setAttribute("placeholder", "Meeting Name")
        name.setAttribute("class", "column2")
        name.setAttribute("id", "classInputNameP" + i)
        link.setAttribute("id", "classInputLinkP" + i)
        link.setAttribute("placeholder", "Meeting Link")
        link.setAttribute("class", "column2")

        container.appendChild(name)
        container.appendChild(link)

        modalBody.appendChild(text)
        modalBody.appendChild(container)
    }
}

function createPeriodsEditor(sequence){
    var head = document.createElement("h3")
    var daysofweek = document.createElement("input")
    head.innerHTML = "Period Sequence " + sequence + "<br><br><p style='font-size:12px'>Days of week active</p>"
    daysofweek.setAttribute("placeholder", "Days of week separated by comma (0=sun, 1=mon ...)")
    daysofweek.setAttribute("style", "width:100%")
    daysofweek.setAttribute("id", "periodInputDaysS" + sequence)
    modalBody.appendChild(head)
    modalBody.appendChild(daysofweek)

    for(let i=1; i<7; i++){
        var container = document.createElement("div")
        var hour = document.createElement("input")
        var minute = document.createElement("input")
        var active = document.createElement("input")
        var text = document.createElement("p")

        container.setAttribute("class", "row")
        text.innerHTML = "Period " + i
        hour.setAttribute("class", "column")
        hour.setAttribute("id", "periodInputHourS" + sequence + "P" + i)
        hour.setAttribute("placeholder", "Hour (24 scale)")
        hour.setAttribute("type", "number")
        minute.setAttribute("class", "column")
        minute.setAttribute("id", "periodInputMinuteS" + sequence + "P" + i)
        minute.setAttribute("placeholder", "Minute")
        minute.setAttribute("type", "number")
        active.setAttribute("type", "checkbox")
        active.setAttribute("id", "periodInputActiveS" + sequence + "P" + i)
        active.setAttribute("class", "column")
        active.setAttribute("checked", "")

        active.addEventListener( 'change', function() {
            var hourP = document.getElementById("periodInputHourS" + sequence + "P" + i)
            var minuteP = document.getElementById("periodInputMinuteS" + sequence + "P" + i)
            if(!this.checked) {
                hourP.value = ""
                minuteP.value = ""
                hourP.setAttribute("disabled", "")
                minuteP.setAttribute("disabled", "")
            } else{
                hourP.removeAttribute("disabled")
                minuteP.removeAttribute("disabled")
            }
        });

        container.appendChild(hour)
        container.appendChild(minute)
        container.appendChild(active)

        modalBody.appendChild(text)
        modalBody.appendChild(container)
    }
}

createInfoEditor()
createPeriodsEditor(1)
createPeriodsEditor(2)
createPeriodsEditor(3)