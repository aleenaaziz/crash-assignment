//Queston number 01

alert("Check to see if number 1 is larger than number 2.");
let number1 = +prompt("enter num 1");
let number2 = +prompt("enter num 2");

if (number1 > number2) {
  console.log(number1 + " is larger then " + number2);
} else if (number1 < number2) {
  console.log(number2 + " is larger then " + number1);
} else {
  console.log("Invalid Number");
}

//Question number 02

alert("Check to see if your number is positive or negative");
let sign = +prompt("enter a number");

if (sign > 0) {
  console.log("The sign is +");
} else if (sign < 0) {
  console.log("The sign is -");
} else {
  console.log("Invalid Number");
}

//Question number 03

let num1 = prompt("Please enter the first number");
let num2 = prompt("Please enter the second number");
let num3 = prompt("Please enter the third number");
let num4 = prompt("Please enter the fourth number");
let num5 = prompt("Please enter the fifth number");

let largerNum;

if (num1 > num2) {
  largerNum = num1;
} else {
  largerNum = num2;
}

if (num3 > largerNum) {
  largerNum = num3;
}

if (num4 > largerNum) {
  largerNum = num4;
}
console.log(largerNum);

//question number 04

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}


//Question number 05

alert("Check your grade");
let grade = +prompt("Enter your marks");

if (grade <= 60) {
    console.log("Your Grade is F");
}
else if (grade <= 70) {
    console.log("Your Grade is D");
}
else if (grade <= 80) {
    console.log("Your Grade is C");
}
else if (grade <= 90) {
    console.log("Your Grade is B");
}
else if (grade <= 100) {
    console.log("Your Grade is A");
}
else{
    console.log("Enter Your marks from 1 to 100"); 
}

//Question number 06

for(let j = 1; j<=100; j++){
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (j % 3 === 0) {
        console.log("Fizz");
    }
    else if (j % 5 === 0) {
        console.log("Buzz");
    }
    else{
        console.log(j);
    }
   
}

//Question number 07

for (let k = 1; k <= 5; k++) {
    let row = "";
    for (let l = 1; l <= k; l++) {
      row += "* ";
    }
    console.log(row);
  }

