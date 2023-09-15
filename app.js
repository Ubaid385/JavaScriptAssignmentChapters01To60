//--------------------------------------------------------------------------------------
//                          Chapter 01 "Alerts"
//--------------------------------------------------------------------------------------
// Answer of Question: 1 - (i, ii, iii, iv, v)
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");

// Answer of Question: 2 alert"You're learning JavaScript!";
//Correct syntax
alert("You're learning JavaScript!");

// Answer of Question: 3
alert("First Name");

//--------------------------------------------------------------------------------------
//                          Chapter 02 "Variables for String"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
var firstName="";
// Answer of Question: 2
var myName;
myName="Syed Ubaid Ullah";
// Answer of Question: 3
var teamName="Dot Net Team";
alert(teamName);
// Answer of Question: 4
var bestMan = "Charlie";
bestMan="John Doe";

//--------------------------------------------------------------------------------------
//                          Chapter 03 "Variables for Numbers"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
var caseQty;
// Answer of Question: 2
caseQty = 144;
// Answer of Question: 3
var num = 9;
// Answer of Question: 4
var addition;
addition = 1 + 2;
// Answer of Question: 5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge; //Output: 110
// Answer of Question: 6
var num = 3;
num = num + 6;

//--------------------------------------------------------------------------------------
//                          Chapter 04 "Variable names Legal and Illegal"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
var productcost = 3.45;
// Answer of Question: 2    var Nameofband;
var nameOfBand;
// Answer of Question: 3
var numberOne = 1;
// Answer of Question: 4
var firstName = "Syed";
var lastName = "Ubaid Ullah";
var fullName = firstName + " " + lastName;
// Answer of Question: 5
//List of Legal Names
// legalName
// _legalName
// $legalname
// legal_name1232
//List of Illegal Names
// 123legalName
// legal-name
// legal@name
// legal#name
// legal%name
// !legalName

//--------------------------------------------------------------------------------------
//                          Chapter 05 "Math Expression 1"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
// The symbol is % and is called 'Modulus'
// Answer of Question: 2
var num = 20 % 6; //Output : 2

// Answer of Question: 3
var largeNum = 1000 * 2000;

// Answer of Question: 4
var num1 = 4;
var num2 = 2;
var subtraction = num1 - num2;

// Answer of Question: 5
var thisIsModulus = 12 % 2;

// Answer of Question: 6
alert(2*7);

//--------------------------------------------------------------------------------------
//                          Chapter 06 "Math Expression 2"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
x++;
// Answer of Question: 2
--x;
// Answer of Question: 3
y=51;
// Answer of Question: 4
z=49;
// Answer of Question: 5
var newNum= num--;
// Answer of Question: 6
var inc = num + 1;
// Answer of Question: 7
var num = 9;
num++;
alert(num);

//--------------------------------------------------------------------------------------
//                          Chapter 07 "Math Expression 3"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
var calculatedNum = 2 + (2 * 6);//Value is 14
// Answer of Question: 2
var calculatedNum = (2 + 2) * 6;//Value is 24
// Answer of Question: 3
var calculatedNum = (2 + 2) * (4 + 2);//Value is 24
// Answer of Question: 4
var calculatedNum = ((2 + 2) * 4) + 2;//Value is 18
// Answer of Question: 5
var cost = (2 + 2) * (4 + 10);
// Answer of Question: 6
var units = 2 + (2 * 4) + 10;
// Answer of Question: 7
var pressure = 4 / (2 * 4);

//--------------------------------------------------------------------------------------
//                          Chapter 08 "Concatenating Text Strings"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
22
// Answer of Question: 2
message = ("Hello," + "Dolly");
alert(message);//'Hello,Dolly'
// Answer of Question: 3
333
// Answer of Question: 4
alert("Pakistan"+" Zindabad");
// Answer of Question: 5
var myAge = "My age is " + 26;
// Answer of Question: 6
var messageOne = "Today is a";
var messageTwo = " Holiday";
var messageResult = messageOne + messageTwo;

//--------------------------------------------------------------------------------------
//                          Chapter 09 "Prompts"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
var fistName = prompt("Enter first name");

// Answer of Question: 2
var country = prompt("Country?","China");

// Answer of Question: 3
var yourName = prompt("Enter Your Name");

// Answer of Question: 4
var yourEmail="Enter your Email"
var email = "s.ubaid.kp@gmail.com";
prompt(yourEmail,email);

// Answer of Question: 5
var message = "What is your age?";
var defaultResponse = "26";
var userPrompt = prompt(message,defaultResponse);

// Answer of Question: 6
var message = "Enter your phone number";
var defaultNumber= "+923202753115";
alert(prompt(message,defaultNumber));

//--------------------------------------------------------------------------------------
//                          Chapter 10 "if statements"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
var city = "Karachi";
if (city = "Karachi") 
{
    console.log("The City OF Lights");
}

// Answer of Question: 2
if(x===y)
{
    var z = prompt("Enter you Name");
    var a = z;
    console.log(a);
}
// Answer of Question: 3
var ZipCode="10010";
if(ZipCode=="10010")
{
    alert("Karachi");
}
else
{
    alert("Please write correct city");
}
// Answer of Question: 4
var num1 = 9;
if(num1 = 9)
{
    num1=10;
}

//--------------------------------------------------------------------------------------
//                          Chapter 11 "Comparison Operators"
//--------------------------------------------------------------------------------------
// Answer of Question: 1
var num1 = 10;
var num2 = 11;
if(num1 != num2)
{
    console.log("Not Equal");
}

// Answer of Question: 2
var x = 6;
var y = 2;
if(x >= y)
{
    console.log('Greater than or equal to');
}

// Answer of Question: 3
var num1=2;
if(num1 != 3)
{
    num1 = 3;
} 

// Answer of Question: 4
if(2 != 9)
{
    alert("congratulations");
}

// Answer of Question: 5
var firstName = prompt("Enter first name");
if(firstName != "Ubaid")
{
    alert("No match");
}

//--------------------------------------------------------------------------------------
//                          Chapter 12 "if...else and else if statements"
//--------------------------------------------------------------------------------------
// Answer of Question: 1

