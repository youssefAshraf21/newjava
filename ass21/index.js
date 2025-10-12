let day1 = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
switch(day1.trim().charAt(0).toUpperCase()){
    case "F":
        console.log("Friday");
        break;
}

let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"
switch(day2 || day3 || day4){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
}

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"
switch(day5 || day6){
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
}

let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"
switch(day7){
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
}

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"
switch(day8){
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
}

let day9 = "World";
// Output => "Its Not A Valid Day"
switch(day9){
    case "friday":
    case "saturday":
    case "sunday":
    case "monday":
    case "thursday":
    case "tuesday":
    case "wednesday":
        break;
    default:
        console.log("Its Not A Valid Day");
}