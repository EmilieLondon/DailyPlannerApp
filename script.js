let currentTime = moment().format("HH");
const container = $(".container");
const currentDay = $("#currentDay");
let taskArray = [];

let li;
let ul;
let button;
let textArea;
let hourDiv;

// $(document).ready(function(){
// let $currentDate = $('currentDay');
// let $currentTime = moment().format('h:mm:ss A');
// let $currentHour = moment().format('h A');

// setInterval(() => {
//     let time = moment().format('dddd, MMM Do, h:mm:ss A');
//     $currentDate.text(time);
// }, 1000);

// let businessHours = [9,10,11,12,1,2,3,4,5];
// let $timeBlockContainerEl = $('container');
// businessHours.forEach((hour, index) => {
//     $timeBlockContainerEl.append(
//         `
//         <div class="row">
//         <p class="col hour time-block">${hour}${index >= 3 ? "PM" : "AM"}</p>
//         <textarea class="col-10" name="description" id="description"></textarea>
//         <button class="col btn saveBtn" type="button>
//         <i class="fas fa-unlock"></i>
//         </button>
//         </div>
//         `

//     );
// });

// })

toDisplayCurrentDay()
createTimeBlocks()

function toDisplayCurrentDay() {
    currentDay.text(moment().format("dddd, MMMM Do"))
}

function createTimeBlocks() {
var timeToDisplay = "09 AM";
var icon;
ul = $("<ul>").addClass("time-block")
container.append(ul)

for (var i = 9; i < 18; i++) {
    li = $("<li>").addClass("row")
        hourDiv = $("<div>").addClass("hour")
        hourDiv.text(timeToDisplay)

        textArea = $("<textarea>")
        if (currentTime == i)
            textArea.addClass("present")
        else if (currentTime > i)
            textArea.addClass("past")
        else {
            textArea.addClass("future")
        }
    
        textArea.val(localStorage.getItem(`${i}`))
        button = $("<button>").addClass("saveBtn ")
        icon = $("<i>").addClass("fa fa-unlock")
        button.attr("item-Number", i)
        button.append(icon)
        li.append(hourDiv).append(textArea).append(button)
        ul.append(li)
        timeToDisplay = moment(i.toString(), ["HH"]).add(1, "hour").format("hh A")
    }
}
