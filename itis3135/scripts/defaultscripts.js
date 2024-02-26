const currentDate = document.getElementById('current-date');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const dayOfWeek = date.getDay();
const dayOfMonth = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const nameInput = document.getElementById('name-input');
const moodInput = document.getElementById('mood-input');
const submitBtn = document.getElementById('submit-btn');

let twelveHourFormat;
let timePeriod;
if (hours == 24) {
    twelveHourFormat = 12;
    timePeriod = "AM";
} else if (hours > 12) {
    twelveHourFormat = hours - 12;
    timePeriod = "PM";
} else if (hours == 12) {
    twelveHourFormat = 12;
    timePeriod = "PM";
} else {
    twelveHourFormat = hours;
    timePeriod = "AM";
}

let formattedDayOfWeek;
switch (dayOfWeek) {
    case 0:
        formattedDayOfWeek = "Sunday";
        break;
    case 1:
        formattedDayOfWeek = "Monday";
        break;
    case 2:
        formattedDayOfWeek = "Tuesday";
        break;
    case 3:
        formattedDayOfWeek = "Wednesday";
        break;
    case 4:
        formattedDayOfWeek = "Thursday";
        break;
    case 5:
        formattedDayOfWeek = "Friday";
        break;
    case 6:
        formattedDayOfWeek = "Saturday";
        break;
}

let formattedMonth;
switch (month) {
    case 0:
        formattedMonth = "January";
        break;
    case 1:
        formattedMonth = "February";
        break;
    case 2:
        formattedMonth = "March";
        break;
    case 3:
        formattedMonth = "April";
        break;
    case 4:
        formattedMonth = "May";
        break;
    case 5:
        formattedMonth = "June";
        break;
    case 6:
        formattedMonth = "July";
        break;
    case 7:
        formattedMonth = "August";
        break;
    case 8:
        formattedMonth = "September";
        break;
    case 9:
        formattedMonth = "October";
        break;
    case 10:
        formattedMonth = "November";
        break;
    case 11:
        formattedMonth = "December";
        break;
}

let formattedMinutes;
if (minutes < 10) {
    formattedMinutes = `0${minutes}`;
} else {
    formattedMinutes = minutes;
}

const formattedDate = `Today is ${twelveHourFormat}:${formattedMinutes} ${timePeriod} on 
${formattedDayOfWeek}, ${formattedMonth} ${dayOfMonth}, ${year}`;
currentDate.textContent = formattedDate;