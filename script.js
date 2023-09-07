const dayOfWeek = (day) =>{
    const newDay = document.getElementById("day");
    newDay.innerHTML = `Current day of the week: ${day}!`;
}


let dateName = new Date();

switch (dateName.getDay()){
    case 0:
        dayOfWeek("Sunday")
    break;
    case 1:
        dayOfWeek("Monday")
    break;
    case 2:
        dayOfWeek("Tuesday")
    break;
    case 3:
        dayOfWeek("Wednesday")
    break;
    case 4:
     dayOfWeek("Thursday")
    break;
    case 5:
        dayOfWeek("Friday")
    break;
    case 6:
        dayOfWeek("Saturday")
    break;
    default:
     dayOfWeek("You have invented a new day")
    
    
}
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const newTime = document.getElementById("time");
newTime.innerHTML = `Time: ${time}`;