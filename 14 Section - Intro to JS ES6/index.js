/*

// console is used to print in the website console
console.log("Welcome to JavaScript...........!")


// JavaScript == ES6 == EcmaScript
// java and javascript are 2 different languages
// JavaScript is interpreted language like python and ruby
// java is compiled lang like c/c++ and swift.


// alert is use to give the popup on the website 
alert("HEllo world..!")


// String is written inside single or double quote

// Norms for writing JS : https://github.com/rwaldron/idiomatic.js

*/












// ----------------------DATA TYPE

/*

// NNSSBBU Short to remeber the data type 
// Null Number String Symbol Boolean BigInt Undefiened


alert(2 + 5)
alert(typeof(10))       // typeof gives us the data type
alert(typeof("Shayan"))
alert(typeof(true))
*/








// ---------------------------VARIABLES

/*

// variable is a container that we used to store are data 
// let and const can be used for variable.

let myName = "Shayan";
let myJob = "Test engineer";

// alert("My current job role is " + myJob);

let myTeacher = "Dr. Angela";
alert(myName + " is my name and my tutor's name is " + myTeacher +".")

*/







// ------------------------------Rules for naming variable

/*

- write a meaning full name for variable
- use const if the variable is never going to change 
- try to use cosnt more than let
- variable should start with alphabet 
- use camel casing eg : myName, therapistFinder

*/




// ------------------------ STRING CONCATENATION

/*
// we can combine string using + sign


let greet = "Good morning";
let myName = "Shayan";

alert(greet + ", " + myName);
*/






// ------------------------- LENGHT PROPERTY

/*
// we can use this to get the length of the string

let message = "Hello everyone, my name is shayan and  I'm here to learn and explore much about the technology.....!!"

alert(message.length);      // 101 char are in message


// TWITTER CHALLENGE
// use can only write 140 char, tell them how much char they are left with 

let tweet = "This is the sample tweet written for the challenge....! I'm gonna be the richest person of the generation I'm in it might be that I'm one of the laziest but my Allah will help me."

let tweetLenght = tweet.length

alert("You have used " + tweetLenght +" and you are left with " + (140 - tweetLenght))

*/







// ----------------------- SLICE

/*

- in slicing indexing starts with 0
- it take values as follows : .slice(start, end + 1, step)
- if i goive only 1 value it will start from there and ends at last index.


let fName = "shayan";
alert(fName.slice(0, 3));


// REMOVE THE EXTRA CHARACTER FROM TWEET STRING

let tweet = prompt("Write your tweet here under 140 characters: ");

let tweet_140 = tweet.slice(0,140);

alert(tweet_140);
alert(tweet_140.length);

*/







// ------------------- CHANGE THE CASE OF THE STRING

/*

let fName = "shayan"
// alert(fName.toUpperCase())      // it does not modifies the original string

// to make the changes to the string we have to re-assign
fName = fName.toUpperCase()
alert(fName)


// CHALLENGE : GREET THE NAME IN CAPITALIZE FORM

let userName = prompt("Enter your name here : ");
alert("Good morning, " + userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase() + "...!")

*/







// ---------------- NUMBERS

/*

- Precedence of the simplification is very much important.
- PEMDAS
- Parenthesis Expo Multi Div Add Sub
- modulo % : this will give us the remainder



alert(7 % 2)        // 1
alert(7 / 2)        // 3.5


// CHALLENGE : CALCULAE DOG AGE TO HUMAN AGE

let dogAge = prompt("Enter the dog's age :");
let humanAge = (dogAge - 2) * 4 + 21;

alert("The human age of the dog is " + humanAge +".");

*/







// -------------------  INCREMENT & DECREMENT OPERATION

/*


let a = 1;
console.log(a);     // 1 
a++;
console.log(a);     // a = a + 1 = 2
a++;
console.log(a);     // 3
a--;
console.log(a);     // 2
a--;
console.log(a);     // 1

// similarly we can perform other mathematical operations

// x += 10 is same as x = x + 10 
*/








// ------------------ FUNCTION

/*

- function is a set of command that is repeated when we use them.


// creating function named func_1
function func_1() {
    console.log("Hello world..........!")
}

// executing the function created
func_1();
func_1();
func_1();



// --- FUNCTION

function getMilk() {
    console.log("Go out");
    console.log("Buy milk");
    console.log("Come back");
}

getMilk()



// --- FUNCTION WITH PARAMETER & ARGUMENTS
function getMilk(bottles) {
    console.log("Go out");
    console.log("Buy "+ bottles +" bottles of milk");
    let cost = bottles * 1.5;
    console.log("Total cost of the milk is", cost + "$.");
    console.log("Come back");
}

getMilk(10)



// --- FUNCTION WITH RETURN & OUTPUT
function getMilk(money) {
    console.log("Go out");
    console.log("Buy bottles of milk");
    console.log("Come back");
    let change = money % 1.5;
    return change;
}

let change = getMilk(11);       // this will execute the loop with the parameter 11

console.log(change);        // this will give the return value of the loop

*/








// ----------------------------- BMI CALCULATOR

/*

- create a function that takes height & width as paramter and gives the output of the BMI.



function bmiCalculator(weight, height) {
    let bmi = weight/(height **2);
    return Math.round(bmi);
}

console.log(bmiCalculator(68, 1.8))
*/




















