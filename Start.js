const { number } = require("prop-types");

var seenAfter = 21;
console.log(seenAfter);
//
console.log(typeof seenAfter);
//
var name = 'Arafat Shuvo';
console.log(name);
console.log(typeof name);
//bolean
var isHot = true;
var isCold = false;
console.log(isHot);
console.log(isCold);
console.log(typeof isCold);
//
var promise = 'I promice that I am working hard for becoming a world class developer';
console.log(promise);
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
//find index 
console.log(promise.indexOf('promice'));
//-1 means not found
console.log(promise.indexOf('dahaka'));
//integer parse parse type
var number1 = 17;
var number2 = 26;
console.log(number1+number2);
//
var number1 = '25';
var number2 = 17;
console.log(number1+number2);
//parsing string;
var number1 = 17;
var number2 = 26.26
number2 = parseFloat(number2);
console.log(number1+number2);
//parse int
number2 = parseInt(number2);
console.log(number1+number2);
//split string
console.log(promise.split('I'));
//string number to float (shortcut)
var number3 = 17.7;
number3=+number3;
console.log(number1+number3);
//convert number to string (add an empty string)
number4 = 12;
number4 = ''+number4;
console.log(number1+number4);
console.log(typeof number4);
//issue with decimal
var num = 0.1;
var num1 = 0.5;
console.log(num + num1);
//fixed decimal 
var total = num + num1;
total = total.toFixed(1);
console.log(total);
            //Mathmatical Operators

var a = 10;
var b = 5;
var sum = a + b;
console.log(sum);
//subtract
var sub = a- b;
console.log(sub);
//multiplication
var multi = a * b;
console.log(multi);
//divissions
var div = a / b;
console.log(div);
//modulas
var remainder = a % b;
console.log(remainder);
//++/__
var c = 50;
var d = 60;
c++;
d--;
console.log(c);
console.log(d);
//string and number
var userName = 'Arafat Shuvo';
var age = 20;
var result = userName+age;
console.log(result);
var result = age + userName;
console.log(result);
//full string added
var userName = 'Arafat';
var userName1 = 'Shuvo';
console.log(userName+' '+userName1);

//valuabe math absulate,random ceil floor
//Absolute
var x = -5;
var Absolute = Math.abs(x);
console.log(Absolute);
//matth round
var y = 6.45545;
var Round = Math.round(y);
console.log(Round);
//ceiling function
var ceilingNumber = Math.ceil(y);
console.log(ceilingNumber);
//floor function
var floorFunction = Math.floor(y);
console.log(floorFunction);
// the Math.random() function returns a floating-point, pseudo-random
//number between 0 (inclusive) and 1 (exclusive)
var randomNumber = Math.random()*10;
console.log(randomNumber);
//round random
var randomNumber = Math.random()*100;
var round = Math.round( randomNumber);
console.log(round);

//make condition
var coffePrice = 10;
if(coffePrice<12){
    console.log('I am drinkig it')
}
else{
    console.log('Iam poor for drinking the coffee')
}
//greater than using
var myAge = 20;
if(myAge>18){
    console.log('I should definetly going for work')
}
else{
    console.log('lot more work todo for competent work');
}
//double equal
var myEarning = 200;
if(myEarning==250){
    console.log('I am buying a reclyner')
}
else{
    console.log('I am happy with the chair')
}
//not equal
if(myEarning != 250){
    console.log('Buying a reclyner')
}
else{
    console.log('happy with chair')
}
//Multiple condition
var job = true;
var savingAmmount = 50000;
if(job == true && savingAmmount > 25000){
    console.log('it is okay then')
}
else{
    console.log('you need to work hard!')
}
//
if(job != true && savingAmmount > 40000){
    console.log('It is okay then')
}
else{
    console.log('you need to work hard');
}
//
if(job != true || savingAmmount>40000){
    console.log('It is okay then')
}
else{
    console.log('You need to work hard')
}
//
if(job == false || savingAmmount > 55000){
    console.log('It is okay then')
}
else{
    console.log('You need to work hard');
}
//
if(job == false && saving > 25000){
    console.log('Work hard')
}
else if(job == true){
    console.log('Saving money')
}
else{
    console.log('Shrap your knowledge courges')
}
//date and time zone 
var newDate = new Date ();
console.log(newDate)

var birthDate = new Date('5-5-2000');
console.log(birthDate);

//fundamemtals array
//declare a array
var friendAge = [18, 20, 25, 21, 22];
console.log(friendAge);
console.log(friendAge[0]);
console.log(friendAge[2]);
//store array using index number
var mAge = friendAge[3];
console.log(mAge);
//chage Array index
friendAge[1]= 23;
console.log(friendAge);
//index of certain element
var position = friendAge.indexOf(23);
console.log(position);
//-1 for notfound
var pos = friendAge.indexOf(17);
console.log(pos);
//push pop length
friendAge.push(22);
friendAge.push(20);
friendAge.push(17);
console.log(friendAge);

friendAge.pop()
friendAge.pop()
console.log(friendAge);

console.log(friendAge.length);
console.log(friendAge['length']);

var teaLine = ['Abby', 'smith', 'bob'];
console.log(teaLine);

teaLine.push('rutherford');
console.log(teaLine);

teaLine.pop();
console.log(teaLine);

//shift remove firsrt item
teaLine.shift();
console.log(teaLine);

//unshift add new item at the beggining
teaLine.unshift('Aktar');
teaLine.unshift('Che');
console.log(teaLine);

//slice method return the array element as a array object
var newTealine = ['Dobby', 'Greame', 'Bob', 'Cirtil', 'mionix00'];
var OO =newTealine.slice(4);
console.log(OO);
var OO2 = newTealine.slice(2,4);
console.log(OO2);
var part3 = newTealine.slice(2,5);
console.log(newTealine);

//
var month = ['january', 'february', 'march', 'april', 'may','june','july'];
month.splice(1,2);
console.log(month);
month.splice(1);
console.log(month);
//insert at 1
var months = ['jan','mar', 'apr', 'may'];
months.splice(1,0,'feb');
console.log(months);
//inert no.5
months.splice(5,0,'jun');
console.log(months);
//replacing no. 1 element
var months = ['jan','feb','mar', 'apr', 'jun'];
months.splice(4,1,'may');
console.log(months);

//while loop
var n=0;
while(n<10){
    console.log(n);
    n=n+1;
}
var n1 = 5;
while(n1<10){
    console.log(n1);
    n1=n1+1;
}
//for loop
for(var i=0;i<15;i++){
    console.log(i);
}

//switch case
var nu = 5;
switch(nu){
    case 1000:
        console.log("i am 1k");
        break;
        case 100:
            console.log("I am 100");
            break;
            case 10:
                console.log("I am 10");
                break;
                case 5:
                console.log('I am 5');
                break;
                default:
                    console.log("I am do not know who are you")
}
//function cALL
function functionName(){
    console.log("I am function")
}
functionName();
//parameters
function doubleIt(n){
    var result = n*2;
    console.log(result);
}
doubleIt(5);
doubleIt(25);
doubleIt(125);

function doubleit(n1){
    var double = n*2;
   return double;
}
var e = doubleit(4);
var f = doubleit(17);
var total = e + f;
console.log(total);
console.log(e,f);

function add(a,b){
    var sum = a+b;
    return sum;
}
var sum1 = add(5,7); 
console.log(sum1);

//object
//property name: property value
var student1 = {
    id: 192002119,
    phone: 01515,
    name: 'Arafat',
}
var student2 = {
    id:192012,
    phone: 13143412,
    name:'Bob'
}
var student3={
    id:192139,
    phone: 95846646,
    name: 'tom',
}
console.log(student1);
console.log(student2);
console.log(student3);
//phone number try 1
var phoneNumber = student1.phone;
console.log(phoneNumber);
//phone number try 2;
var phoneNumber2 = student2['phone'];
console.log(phoneNumber2);
//phone number try 3
var phonePropName = 'phone';
var phoneNo3 = student3[phonePropName];
console.log(phoneNo3);
//change phone number
student2.phone= 542854;
student2['phone']= 66453432;
student2[phonePropName]=9999323;
console.log(student2);

//Add new property
student2.cinema ='Inception';
student3['cinema']='Ludo';
console.log(student1);
console.log(student2);
console.log(student3);

