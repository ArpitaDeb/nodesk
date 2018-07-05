let weekdayNumber = 5;
console.log("\nSwitch Method:");
switch(weekdayNumber) {
    case 1:
        console.log("Today it's Monday");
        break;
    case 2:
        console.log("Today it's Tuesday");
        break;
    case 3:
        console.log("Today it's Wednesday");
        break;
    case 4:
        console.log("Today it's Thursday");
        break;
    case 5:
        console.log("Today it's Friday");
        break;
    case 6:
        console.log("Today it's Saturday");
        break;
    case 7:
        console.log("Today it's Sunday");
        break;
    default:
        console.log("Ummm...that's outside of the week boundary...");
}

console.log("\nIF/ELSE/IF Method:");
if (weekdayNumber == 1) {
    console.log("Today it's Monday");
} else if (weekdayNumber == 2) {
    console.log("Today it's Tuesday");
} else if (weekdayNumber == 3) {
    console.log("Today it's Wednesday");
} else if (weekdayNumber == 4) {
    console.log("Today it's Thursday");
} else if (weekdayNumber == 5) {
    console.log("Today it's Friday");
} else if (weekdayNumber == 6) {
    console.log("Today it's Saturday");
} else if (weekdayNumber == 7) {
    console.log("Today it's Sunday");
} else {
    console.log("Please enter a number from 1-7");
}

console.log("\nRefactored Switch:");
let weekdayName;
switch(weekdayNumber) {
    case 1:
        weekdayName = "Monday";
        break;
    case 2:
        weekdayName = "Tuesday";
        break;
    case 3:
        weekdayName = "Wednesday";
        break;
    case 4:
        weekdayName = "Thursday";
        break;
    case 5:
        weekdayName = "Friday";
        break;
    case 6:
        weekdayName = "Saturday";
        break;
    case 7:
        weekdayName = "Sunday";
        break;
    default: 
        weekdayName = "ERROR: Please enter a number between 1 and 7";
}
if (weekdayNumber > 0 && weekdayNumber < 8) {
    console.log("Today it's " + weekdayName);
} else {
    console.log("Please enter a number between 1 and 7");
}