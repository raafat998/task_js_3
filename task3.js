// 1- Write a program that prints numbers from 1 to 10 using a for loop.

for(let index =0 ; index<=10 ; index++){
  console.log(index);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for(let index =0 ; index<=10 ; index++){
  if(index % 2 ===0 && index>0){
    console.log(index);
  }
  
}


// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

for(let index =0 ; index<=10 ; index++){
  if(index % 2 !==0 && index>0){
    console.log(index);
  }
  
}

let index=0;
while(index<10)
{
  index+=1;
 if(index % 2 !==0 && index>0){
    console.log(index);
  }
  

}


// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let num5 = prompt('pleas enter a number')

for(i=0;i<=10;i++){
console.log(i*num5);
}


// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let i=1;
let sum =0;

while(i<=100){
  sum += i;
  i++;
console.log(sum);
}

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let num = prompt('Please enter a number');
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial of", num, "is:", factorial);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

let limit = parseInt(prompt("Enter the limit for Fibonacci series:"));
let num1 = 0, num2 = 1, nextTerm;

console.log("Fibonacci Series:");

while (num1 <= limit) {
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}


// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

function reverseNumbers(number) {
  let reversedNumbers = [];
  for (let i = number - 1; i >= 0; i--) {
      reversedNumbers.push(i);
  }
  return reversedNumbers;
}

const numbers = [5, 10, 15, 20];

numbers.forEach(number => {
  console.log(`Reversed numbers of ${number}: ${reverseNumbers(number)}`);
});