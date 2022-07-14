// DATE METHODS

//  1. Write a program that displays current date and time in
//    your browser.

var date = new Date();
document.write(date);

// 2. Write a program that alerts the current month in words. For example December.

// method 1
var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var d = new Date();
let name = month[d.getMonth()];
document.write(name);

// method 2
var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(4, 7);
if (c === "Jan") {
  document.write("Current month: January");
} else if (c === "Feb") {
  document.write("Current month: February");
} else if (c === "Mar") {
  document.write("Current month: March");
} else if (c === "Apr") {
  document.write("Current month: April");
} else if (c === "May") {
  document.write("Current month: May");
} else if (c === "Jun") {
  document.write("Current month: June");
} else if (c === "Jul") {
  document.write("Current month: July");
} else if (c === "Aug") {
  document.write("Current month: August");
} else if (c === "Sep") {
  document.write("Current month: September");
} else if (c === "Oct") {
  document.write("Current month: October");
} else if (c === "Nov") {
  document.write("Current month: November");
} else if (c === "Dec") {
  document.write("Current month: December");
}

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var d = new Date();
var day = weekday[d.getDay()];
document.write(day);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var d = new Date();
var day = weekday[d.getDay()];
if (day == "Saturday") {
  alert("Its fun day");
} else {
  alert("It's Work day");
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var d = new Date();
var day = [d.getDate()];
document.write(day);

if (day <= 15) {
  alert("Its first fifteen days of the Month");
} else {
  alert("Its last fifteen days of the Month");
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// method 1

var date = new Date();
document.write("Current Date is " + date + "</br>");

var a = new Date();
document.write(a + " <br/>");

var b = new Date("9-10-2022");
var c = b.getTime();

var d = new Date("01-01-1970");
var e = d.getTime();

var f = (b - d) / (1000 * 60 * 60 * 24 * 365);
document.write(
  "Elapsed milliseconds since  Jan. 1, 1970 " + f * 31556952000 + " <br/>"
);

document.write(
  "Elapsed milliseconds since  Jan. 1, 1970 " + f * 525949.2 + " <br/>"
);

// method 2
var currentDate = new Date();
var day = currentDate.getDay();

var newDate = new Date("01-01-1970");
newDate.setHours(0, 0, 0, 0);
var minutesFrom = (currentDate.getTime() - newDate.getTime()) / (1000 * 60);
document.write("Current Date: <b>" + newDate + "</b><br>");
document.write(
  "Elapsed milliseconds since January 1, 1970: <b>" +
    (currentDate.getTime() - newDate.getTime()) +
    "</b><br>"
);
document.write(
  "Elapsed minutes since January 1, 1970: <b>" + minutesFrom + "</b><br><br>"
);

//7 . Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// method 1
var date = new Date();
if (date <= 12) {
  alert("its AM");
} else {
  alert("its PM");
}

// method 2
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
console.log(formatAMPM(new Date()));

// method 3
var currentDate = new Date();
var hours = currentDate.toLocaleString("en-US", {
  hour: "numeric",
  hour12: true,
});
var timeCheck = hours.indexOf("PM");
if (timeCheck === -1) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date("12-31-2020");
document.write(laterDate);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// method 1
var firstRamzan = new Date("06-18-2015");
var currentDate = new Date();
var totalDays =
  (currentDate.getTime() - firstRamzan.getTime()) / (1000 * 60 * 60 * 24);
document.write(
  Math.round(totalDays) + " are the number of days passed since ramzan of 2015"
);

// mathod 2
var currentDate = new Date();
var ramadanDate = new Date("06-18-2015");
var timePassedSinceRamadan =
  (currentDate.getTime() - ramadanDate.getTime()) / (1000 * 60 * 60 * 24);
document.write(
  timePassedSinceRamadan + " days have passed since 1st Ramadan, 2015 <br><br>"
);

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var referenceDate = new Date("12-05-2015");
var finalReferenceDate = referenceDate.getTime() / (1000 * 60);

document.write(
  "On reference date " +
    referenceDate +
    ", <br>" +
    finalReferenceDate +
    " seconds had passed since the beginning of 2015</br>"
);

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser

var newDate = new Date();
var previousDate = new Date();
newDate.getHours();
var changedHour = previousDate.setHours(newDate.getHours() - 1);

document.write(newDate + " <br/>");
document.write(previousDate + "<br/>");

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var currentDate = new Date();
var oldDate = new Date();

oldDate.setFullYear(currentDate.getFullYear() - 100);
document.write(currentDate + "<br><br>");
document.write(oldDate + "<br><br>");

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var currentDate = new Date();
var userAge = parseInt(prompt("Enter your age in Years: "));
var birthYear = currentDate.getFullYear() - userAge;
document.write(
  "Your age is " + userAge + "<br>Your birth year is " + birthYear + "<br><br>"
);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

document.write("<h1>K-Electric Bill</h1><br>");
var customerName = prompt("Enter the customer name: ");
var monthOf = prompt("Enter the billing month: ");
var month;
var currentDate = new Date();
var units = parseInt(prompt("Enter the units: "));
var chargesPerUnit = parseInt(prompt("Enter the charges per unit: "));
var netAmount = units * chargesPerUnit;
var latePaySubcharge = 350;
var afterDueAmount = units * chargesPerUnit + latePaySubcharge;

document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + monthOf + "</b><br>");
document.write("Number of units: <b>" + units + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
document.write(
  "Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>"
);
document.write("Late Payment surcharge: <b>" + latePaySubcharge + "</b><br>");
document.write(
  "Gross amount Payable (after Due Date): <b>" + afterDueAmount + "</b>"
);
