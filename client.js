// before string variable //
const initialString = "This is the unmodified string"

//before number variable //
let initialNumber = 0;

// render original values in html "before" section //
let target = document.querySelector("#string");
target.innerHTML = initialString;
target = document.querySelector("#number");
target.innerHTML = initialNumber;

// string methods rendered in after section //

// select target element //
target = document.querySelector("#modified-string-1");
// get string length, render in html //
target.innerHTML = initialString.length;
// select target element //
target = document.querySelector("#modified-string-2");
// replace word in string, render in html //
target.innerHTML = initialString.replace("unmodified", "altered");
// select target element //
target = document.querySelector("#modified-string-3");
// concatenate with another string, render in html //
target.innerHTML = initialString + ". Or is it?";

// number methods //

// select target element //
target = document.querySelector("#modified-number-1");
// increment by 5, render in html //
target.innerHTML = initialNumber += 5;
// select target element //
target = document.querySelector("#modified-number-2");
// check in an integer, render in html //
target.innerHTML = Number.isInteger(initialNumber);
// select target element //
target = document.querySelector("#modified-number-3");
// reassigned variable //
initialNumber = 5.25456;
// render in html with 2 decimal places //
target.innerHTML = initialNumber.toFixed(2);