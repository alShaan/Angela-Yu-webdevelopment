// -------------------- PSEUDO RANDOM NO. GENRATION

/*

- step 1 : gen a random number using Math.random() which gives value from 0 to 0.9999999999999999.
- step 2 : multiply it with a biggest number you want to randomise
- step 3 : use Math.floor() to remove the float

- then you get the random number from 0 to (largest number) -1



// random number from 1 to 6

let rNum = Math.random();
rNum = rNum * 6;
rNum = Math.floor(rNum) + 1 ;

console.log(rNum);


// A random whole number between 1 and 10:
let x = Math.floor((Math.random() * 10) + 1);

// Return a random number between 0 and 9:
let x = Math.floor(Math.random() * 10);

console.log(x)
*/









// ---------------------------- Challenge : LOVE CALCULATOR

/*

- take 2 prompts asking the names of the couple
- and then generate the random number between 1 to 100
- which will the love percentage of the 2


let person1 = prompt("Name of 1st couple :");
let person2 = prompt("Name of 2nd couple :");

let loveScore = Math.floor((Math.random() * 100) + 1)

alert("-*-*-*-* Love score of "+ person1 + " & " + person2 +" is " + loveScore + ".");

*/









// --------------------- IF-ELSE STATEMENT

/*

- after evaluating the condition if it is true then execute the if statement, if the condition is false execute the else statement
- This is why it is also called as CONTROL FLOW.



// improve the love calculator using if-else

let person1 = prompt("Name of 1st couple :");
let person2 = prompt("Name of 2nd couple :");

let loveScore = Math.floor((Math.random() * 100) + 1);

if (loveScore >= 50) {
    alert("You are doing great......!");
} else {
    alert("-*-*-*-* Love score of "+ person1 + " & " + person2 +" is " + loveScore + ".");
}

*/









// ------------------ COMPARISON & EQUALITY

/*

==  : both side are equal
=== : both side are equal & have equal types
!== : both side not equal


**** LOGICAL OPERATOR
&& : AND operator both condition should be TRUE
|| : OR operator atleast 1 condition should be TRUE
!  : Negate makes True to false and vice versa

*/







//  ------------------ LEAP YEAR CHALLENGE

/*
A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.

*/


// function isLeap(year) {
    
//     /**************Don't change the code above****************/    
        
//     //Write your code here.    
//     if (year % 4 === 0) {
//         if(year % 100 === 0){
//             if(year % 400 === 0){
//                     return "Leap year.";
//                 } 
//                 else {
//                     return "Not leap year.";
//                 }
//             } else {
//                 return "Leap year."
//             }
            
            
//         } else {
//             return "Not leap year."
//         }
        
        
        
//         /**************Don't change the code below****************/    
        
//     }
    
    
    
//     // 4 se divide hua toh hai warna nahi
//     // 4 se aur 100 se hai toh nhi hai jabtak woh 4 , 100 aur 400 se bhi divide na ho


    
    
    
    
    




// --------------- Arrays

/*
Arrays : this is used to store the collection of same or different data type inside the same container or variable.

- square brackets are used to store the array.


let fruit = ["apple", "banana", "orange", "tomato", "grapes"]

console.log(fruit[1])
console.log(fruit.length)
*/


// ------------- Guest name challenge
/*
we will learn :
- array.incluedes() : this is used to check wether the element written inside parenthesis is present in the array or not.


const guestList = ["Angela", "Jack", "Shayan", "Shy", "Zainab"];

let guestName = prompt("Enter your name :");

if (guestList.includes(guestName)) {
    alert("Welcome, to the party....!");
} else {
    alert("Well your name is not in the list, Sorry.");
}
*/








// ------------------- Fizz Buzz challenge

/*

We will learn :
- array.push() : this is used to insert the item at the end of the array
- array.pop() : this is used to remove the last item from the array.
- 


let output = []

function fizzbuzz() {

    // write the code below

    let num = output.length + 1;
    
    if ((num % 3 === 0) && (num % 5 === 0)){
        output.push("FizzBuzz");
    } else if (num % 3 === 0) {
        output.push("Fizz");
    } else if (num % 5 === 0 ) {
        output.push("Buzz");
    } else {
        output.push(num);
    }
    
    
    console.log(output);
}

*/







// ---------- function that generate random number

/*

// below func will give random number between 0 to 4
function randomNum() {
    
    let num = Math.floor(Math.random() * 5);
    return num;
}
*/









// ------------------- WHILE loop

/*

The loop will continue to run unless the condition written inside the while loop becomes false.


let i = 1;

while (i < 10){
    console.log(i)
    i++
}

*/







// ----------- Using while loop in fizzbuzz

/*

let output = []
let num = 1;

function fizzbuzz() {

    // write the code below
    
    while (num < 101){

        
        if ((num % 3 === 0) && (num % 5 === 0)){
            output.push("FizzBuzz");
        } else if (num % 3 === 0) {
            output.push("Fizz");
        } else if (num % 5 === 0 ) {
            output.push("Buzz");
        } else {
            output.push(num);
        }
        
        num ++
        
    }
    
    console.log(output);
}

*/









// ------------------ For Loops

/*

This loops is used to run the loop for a certain number of time

for (start; end; step/change){
    // code goes here
}


for (let i=0; i <= 10 ; i++){
    console.log(i);
}

*/







// -------------- FIBONACCI SERIES