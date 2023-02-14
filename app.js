document.write("<h1> JavaScript Assignment 4 </h1>")

// CHAPTER 9-11
document.write("<h3> Chapter 9-11 </h3>")

// Question 01 
document.write("<h4> Question 01 </h4>")

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”,
//  welcome the user like this: “Welcome to city of lights”

var city = prompt("Enter your City");

if (city == "KARACHI") {
    alert("Welcome to city of lights!");
}

// Question 02
// 2. Write a program to take “gender” as input from user.
// If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");

if (gender == "MALE") {
    alert("Good Morning Sir");
}

else if (gender == "FEMALE") {
    alert("Good Morning Ma'am");
}

// Questiom 03
// Write a program to take input color of road traffic signal from the user & show the message according to this table:

var color = prompt("Enter the color of the road traffic signal (red, yellow, or green):");

if (color === "red") {
    alert("Stop");
} else if (color === "yellow") {
    alert("Caution");
} else if (color === "green") {
    alert("Go");
} else {
    alert("Invalid input. Please enter red, yellow, or green.");
}

// Question 04
// 4. Write a program to take input remaining fuel in car (inlitres) from user.
// If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = prompt("Remaining Fuel in car?", "Litres")

if (fuel < "0.25 Litres") {
    alert("Please refill the fuel in your car");
} else {
    alert("Have a safe journey!");
}

// Question 05
document.write("<h4> Question 05 </h4>")
// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
console.log(a)
document.write("given condition is True" + "<br>");

// b.
var b = 82;
if (b++ === 83) {
    alert("A. given condition for variable b is true");
}
console.log(b)
document.write("B. given condition is True" + "<br>");

// c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
console.log(c)
document.write("C. given conditions are True" + "<br>");

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
console.log(totalCost)
document.write("D. given condition is True" + "<br>" + "<br>");

// e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// This is because in JavaScript, strings are compared character-by-character using the Unicode code points of their characters. 
// In this case, the first character in "car" is 'c' with code point 99, while the first character in "cat" is 'c' with code point 99 as well.
// The second character in "car" is 'a' with code point 97, while the second character in "cat" is 'a' with code point 97 as well. 
// The third character in "car" is 'r' with code point 114,while the third character in "cat" is 't' with code point 116.
// Since 'r' (114) is less than 't' (116), the comparison "car" < "cat" evaluates to true.

// Question 06

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table:
document.write("<h4> Question 06 </h4>")

var marks1 = +prompt("Enter marks obtained in subject 1:");
var marks2 = +prompt("Enter marks obtained in subject 2:");
var marks3 = +prompt("Enter marks obtained in subject 3:");
var totalMarks = +prompt("Enter total marks:");

var totalObtainedMarks = marks1 + marks2 + marks3;
var percentage = (totalObtainedMarks / totalMarks) * 100;


document.write("<h2> MARK SHEET </h2>" + "<br>")
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

if (percentage >= 80) {
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
} else if (percentage >= 70) {
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
} else if (percentage >= 60) {
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
} else {
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry" + "<br>");
}

// Question 07 
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
var secretNumber = 7;

// Prompt user to guess the secret number.
var guess = prompt("Guess the secret number ranging from 1 to 10");

// a. If user guesses the same number, show “Bingo! Correct answer”.
if (guess == secretNumber) {
    alert("Bingo! Correct Answer");
}
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
else if (guess == secretNumber + 1) {
    alert("Close enough to the correct answer");
}

// Question 08
// 8. Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.

var num = prompt("Enter a number:");

if (num % 3 === 0) {
    alert(num + " is divisible by 3");
} else {
    alert(num + " is not divisible by 3");
}

// Question 09
// 9. Write a program that checks whether the given input is an even number or an odd number.

var num = prompt("Enter a number:");

if (num % 2 === 0) {
    alert(num + " is an even number");
} else {
    alert(num + " is an odd number");
}

// Question 10
// 10. Write a program that takes temperature as input and shows a message based on following criteria
var temp = prompt("Enter Temperature");

// a. T > 40 then “It is too hot outside.”
if (temp > "40") {
    alert("It is too hot outside");
}

// b. T > 30 then “The Weather today is Normal.”
else if (temp > "30") {
    alert("The Weather today is Normal");
}

// c. T > 20 then “Today’s Weather is cool.”
else if (temp > "20") {
    alert("Today's Weather is cool.");
}

// d.T > 10 then “OMG! Today’s weather is so Cool.”
else if (temp > "10") {
    alert("“OMG! Today’s weather is so Cool.”");
}


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// Question 11

// a.First number
var firstNumber = +prompt("Enter the num1");

//b.Second number
var secondNumber = +prompt("Enter the num2");

//c.Operation(+, -, *, /, %)
var opt = prompt("Enter the operator");

var result;

// Compute & show the calculated result to user.
if (opt === "+") {
    result = firstNumber + secondNumber
}

else if (opt === "-") {
    result = firstNumber - secondNumber
}

else if (opt === "*") {
    result = firstNumber * secondNumber
}

else if (opt === "/") {
    result = firstNumber / secondNumber
}

else if (opt === "%") {
    result = firstNumber % secondNumber
} else {
    alert("Invalid operation");
}

// Show the result to the user
if (result !== undefined) {
    alert("The result is: " + result);
}


// Questiion 12-13 
// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

document.write("<h3> Chapter 12-13 </h3>")

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a character: ");

var charCode = char.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    console.log(char + " is a number");
} else if (charCode >= 65 && charCode <= 90) {
    console.log(char + " is an uppercase letter");
} else if (charCode >= 97 && charCode <= 122) {
    console.log(char + " is a lowercase letter");
} else {
    console.log(char + " is not a number or letter");
}


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter the first integer: ");
var num2 = +prompt("Enter the second integer: ");

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
} else {
    console.log("The two integers are equal");
}


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var num = +prompt("Enter a number: ");

if (num > 0) {
    console.log(num + " is positive");
} else if (num < 0) {
    console.log(num + " is negative");
} else {
    console.log("The number is zero");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var char = prompt("Enter a Alphabet: ");

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
    console.log(char + " is a vowel");
} else {
    console.log(char + " is not a vowel");
}

// 5. Write a program that
// a. Store correct password in a JS variable.

var correctPassword = "sabeh123";

// b. Asks user to enter his/her password
var userPassword = prompt("Enter your password: ");

// c. Validate the two passwords:

//i. Check if user has entered password. If not, then give message “ Please enter your password”
if (userPassword === "") {
    console.log("Please enter your password");


    //ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
    // Show “Incorrect password” otherwise.
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
//if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// Correct code is 
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements

var time = prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm): ");

if (time >= 0000 && time < 1200) {
    console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night");
} else {
    console.log("Invalid time format entered");
}
