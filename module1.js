//unite converter
var inch = 156;
var feet = inch / 12;
console.log(feet);
//using function
function inchTofeet(inch){
    var feet = inch / 12;
    return feet;
}
var newFeet = inchTofeet(300);
console.log(newFeet);
//index of an array
var inchArr = [156, 288, 300];
var newFeet = inchTofeet(inchArr[1]);
console.log(newFeet);
//foor loop
var inchArr=[156,288,124];
for(var i=0; i<inchArr.length;i++){
    var feet = inchArr[i] / 12;
    console.log(feet);
}
//modern day let
let name = 'Wasim Akram';
console.log(name);
console.log(name.length);
if(name > 8){
    name = 'Arafat shuvo';
}
console.log(name);
//if no need to change use const
const country = 'Bangladesh';
console.log(country);
//use const wherever it possible
function inchTofeet(inch){
    const feet = inch / 12;
    return feet;
}
var newFeet = inchTofeet(1200);
console.log(newFeet);
//index of array
const inchArr1 = [120,242,3242];
const newFeetarr = inchTofeet(inchArr1[1]);
console.log(newFeetarr);

//leap year
var year = 2020;
if(year % 4 == 0){
    console.log('Year is leap year')
}
else if(year % 400){
    console.log('Year is leap year')
}
else{
    console.log('Year is not leap year');
}
//function
function isLeapYear3(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
   }
   console.log(isLeapYear3(1700));
   console.log(isLeapYear3(2016));
   console.log(isLeapYear3(2000));
   console.log(isLeapYear3(100));
   //factorial
   let factorial = 1;
   for(let i = 1;i<=10;i++)
   {
    factorial = factorial*i;
    console.log(i,  factorial);
   }
   //function
   function factorialNumber(n){
       let factorial = 1;
       for(let i=1;i<=10;i++){
           factorial = factorial*i;
       }
       return factorial;
   }
   let result = factorialNumber(10);
   console.log(result);
   // while loop
   let j = 1;
   let factorial2 = 1;
   while(j<= 10){
       factorial2 = factorial2*i;
       j++;
   }
   console.log(j, factorial2);
   //calculate factorial in recursive
   function rFactorial(n){
       if(n == 0){
           return 1;
       }else{
           return rFactorial(n-1)*n;

       }
   }
   let nresult = rFactorial(10);
   console.log(nresult); 