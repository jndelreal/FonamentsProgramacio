month = prompt("Please enter a month.");

switch(month) {
case "April":
case "June":
case "September":
case "November":
    alert(`The month of ${month} has 30 days.`);
    break;
case "February":
    alert(`The month of ${month} has 28 days.`);
    break;
default:
    alert(`The month of ${month} has 31 days.`)
}