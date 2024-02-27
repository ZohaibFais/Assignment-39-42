//Q1.
// var age = parseInt(prompt("Enter your age:"))

// switch (true) {
//     case age>=18:{
//         document.write("Old enough")
//         break;
//     }
//     default:{
//         document.write("Too young")
//     }
    
// }

//Q2.

// var num = parseInt(prompt("Enter number to check: "))

// switch(num%3){
//     case(0):{
//         document.write("Number is divisible")
//         break
//     }
//     default:{
//         document.write("Not divisible")
//     }
// }

//Q3.
// var num1 = parseInt(prompt("Enter larger number: "))
// var num2 = parseInt(prompt("Enter second number: "))
// var operation = prompt("Enter operation: ")

// switch(operation){
//     case("+"):{
//         var result = num1 + num2
//         document.write("Result after addition: "+ result)
//         break
//     }
//     case("-"):{
//         var result = num1 - num2
//         document.write("Result after subtraction: "+ result)
//         break
//     }
//     case("*"):{
//         var result = num1 * num2
//         document.write("Result after multiplication: "+ result)
//         break
//     }
//     case("/"):{
//         var result = num1 / num2
//         document.write("Result after division: "+ result)
//         break
//     }
//     case("%"):{
//         var result = num1 % num2
//         document.write("Result after modulus: "+ result)
//         break
//     }
//     default:{
//         document.write("Enter correct operation")
//     }
// }

//Q4.
// var date = new Date()
// var day = date.getDay()

// switch(day){
//     case(0):{
//         document.write("Sunday")
//         break
//     }
//     case(1):{
//         document.write("Monday")
//         break
//     }
//     case(2):{
//         document.write("Tuesday")
//         break
//     }
//     case(3):{
//         document.write("Wednesday")
//         break
//     }
//     case(4):{
//         document.write("Thursday")
//         break
//     }
//     case(5):{
//         document.write("Friday")
//         break
//     }
//     case(6):{
//         document.write("Saturday")
//         break
//     }
//     default:{
//         document.write("Not a correct day")
//     }
    
// }

//Q5.
// var date = new Date()
// var day = date.getDay()

// switch(day){
//     case(day ==0):{
//         document.write("Sunday!!")
//     }
//     case(day==6):{
//         document.write("Saturday!!")
//     }
//     default:{
//         document.write("Weekday!!")
//     }

// }

// Q6.
// function checkCar(){
//     var text;
//     var favCar = prompt("What is your favourite car? ")
//     switch(favCar){
//         case("BMW"):{
//             text = "German car"
//             break
//         }
//         case("Ford"):{
//             text = "American car"
//             break
//         }
//         case("Peugeot"):{
//             text = "French car"
//             break
//         }
//         default: {
//             text = "Unknown Car name"
//         }
//     }
//     document.write(text)
// }
// checkCar()

//Q7.

// function checkFruit() { 
//     var text; 
//     var fruits = prompt("Enter a fruit name"); 
//     switch(fruits) { 
//         case "Banana":{
//             text = "Banana is good!";
//             break 
//         } 
//         case "Orange":{
//             text = "I am not a fan of orange.";  
//             break
//         }
//         case "Apple":{
//             text = "How you like them apples?";
//             break
//         }
//         default :{
//         text = "I have never heard of that fruit."; 
//         }
//     }
//     document.write( text); 
// } 

// checkFruit(); 


//Q8.

// function grade(){
//     var getGrade = prompt("Enter grade: ")
//     var text;
//     switch(getGrade){
//         case("A*"):{
//             text = "Marks[>=80 and <=100]"
//             break
//         }
//         case("A"): {
//             text = "Marks[>=70 and <80]"
//             break
//         }
//         case("B"):{
//             text = "Marks[>=60 and <70]"
//             break
//         }
//         case("C"):{
//             text = "Marks[>=50 and <=60]"
//             break
//         }
//         default:{
//             text= "You failed"
//         }
//     }
//     document.write(text)
// }

// grade()

//Q9.

// var month = parseInt(prompt("Enter month number: "))
// var text;

// switch(month){
//     case (1):{
//         text = "January"
//         break
//     }
//     case(2):{
//         text= "Feburary"
//         break
//     }
//     case(3):{
//         text = "March"
//         break
//     }
//     case(4):{
//         text = "April"
//         break
//     }
//     case(5):{
//         text = "May"
//         break
//     }
//     case(6):{
//         text = "June"
//         break
//     }
//     case(7):{
//         text = "July"
//         break
//     }
//     case(8):{
//         text = "August"
//         break
//     }
//     case(9):{
//         text = "September"
//         break
//     }
//     case(10):{
//         text = "October"
//         break
//     }
//     case(11):{
//         text = "November"
//         break
//     }
//     case(12):{
//         text = "December"
//         break
//     }
//     default:{
//         text=  "Invalid month"
//     }
// }
// document.write(text)

//Q10.

// var age = parseInt(prompt("Enter your age:"));

// var voteable = (age < 18) ? "Too young" : "Old enough";

// document.write(voteable);

//Q11.

// var i =0;
// while(i<6){
//     document.write("Hello World" + "<br>")
//     i++
// }

//Q12.
// var i =1;
// while(i<11){
//     document.write(i +"<br>")
//     i++
// }


//Q13.
// var num = parseInt(prompt("Enter a number to print its multiplication table: "))
// var length = parseInt(prompt("Enter length of multiplication table: "))

// document.write("Multiplication table of" +" "+ num + "<br>")
// document.write("Length" + " " + length + "<br>")

// for (var i=1; i<=length; i++){
//         var result = num *i 
//         document.write(num + "x"+ i + "="+ result + "<br>")
// }

//Q14.

// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

// for ( var i=0; i<A.length; i++){
//     document.write(A[i] + "<br>")
// }

//Q15.

// var fruits =["apple","banana", "mango","orange","strawberry"]
// var length = fruits.length

// for (i=0; i<length; i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write("<br>")

// for (i=0; i<length; i++){
//     document.write("Element at index" + " " + i + " "+ "is" + " " + fruits[i] + "<br>")
// }


//Q16.

// var numItems = parseInt(prompt("Enter number of items: "))
// var items = []
// for (var i=0; i <numItems; i++){
//     var value = prompt("Enter value at index" + " "+ i + ":" )
//     items.push(value)
// }

// document.write("Number of items:" + numItems + "<br>")
// document.write("Items: " + "<br>" + "<br>" )

// for (var i=0; i<numItems;i++){
//     document.write(items[i] + "<br>")
// }


//Q17.
// a. Counting: 1, 2, 3, ..., 15

// document.write("a. Counting: ");
// var count = 1;
// while (count <= 15) {
//     document.write(count + ", ");
//     count++;
// }
// document.write("<br>");

// b. Reverse counting: 10, 9, ..., 1

// document.write("b. Reverse counting: ");
// var reverseCount = 10;
// while (reverseCount >= 1) {
//     document.write(reverseCount + ", ");
//     reverseCount--;
// }
// document.write("<br>");

// c. Even: 0, 2, 4, ..., 20

// document.write("c. Even: ");
// var even = 0;
// while (even <= 20) {
//     document.write(even + ", ");
//     even += 2;
// }
// document.write("<br>");

// d. Odd: 1, 3, 5, ..., 19

// document.write("d. Odd: ");
// var odd = 1;
// while (odd <= 19) {
//     document.write(odd + ", ");
//     odd += 2;
// }
// document.write("<br>");

// e. Series: 2k, 4k, ..., 20k

// document.write("e. Series: ");
// var series = 2;
// while (series <= 20) {
//     document.write(series + "k, ");
//     series += 2;
// }

//Q18.
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(item) {
//     item = item.toLowerCase();

//     var found = false;

//     while (!found && i < A.length) {
//         if (A[i] === item) {
//             found = true;
//         }
//         i++;
//     }

//     if (found) {
//         alert("Yes, '" + item + "' is found at index " + i + "in our bakery");
//     } else {
//         alert("No, '" + item + "' is not found in the list.");
//     }
// }

// var userInput = prompt("Enter an item to search:");

// searchItem(userInput);

//Q20

// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter the stop value:"));

// for (var i = 0; i < scores.length; i++) {
//     document.write(scores[i] + " ,");
    
//     if (scores[i] === stopValue) {
//         break; 
//     }
// }

//Q21.

// var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (var i = 0; i < A.length; i++) {
//     var row = ""; 
    
    
//     for (var j = 0; j < A[i].length; j++) {
//         row += A[i][j]; 
//         if (j !== A[i].length - 1) {
//             row += " "; 
//         }
//     }
    
//    document.write(row + "<br>"); 
// }

//Q22.

// var num = parseFloat(prompt("Enter a number:"));

// while (num >= 0) {
//     document.write(num + "<br>"); 
//     num -= 0.5; 
// }

//Q23.

// var i = 0;

// while (i <= 20) {
//     if (i % 2 === 0) {
//         document.write(i + " is even" + "<br>");
//     } else {
//         document.write(i + " is odd" + "<br>");
//     }
//     i++;
// }


//Q24.

// var product = 1;
// for (var i = 1; i <= 7; i += 2) {
//     product *= i; 
// }

// document.write("The product of the odd integers from 1 to 7 is: " + product);


//Q25.

// var initialStars = parseInt(prompt("Enter the initial number of stars:"));
// var stars = initialStars;

// while (stars > 0) {
//     var line = "";
//     for (var i = 0; i < stars; i++) {
//         line += "*";
//     }
//     document.write(line + "<br>"); 
//     stars--; 
// }


//Q26.

// var numLines = parseInt(prompt("Enter the number of lines:"));

// //(A)
// document.write("<h3>Pattern A:</h3>");
// for (var i = 0; i < numLines; i++) {
//     for (var j = 0; j < 5; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// //(B)
// document.write("<h3>Pattern B:</h3>");
// for (var i = 1; i <= numLines; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// // (C)
// document.write("<h3>Pattern C:</h3>");
// for (var i = numLines; i >= 1; i--) {
//     for (var j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }
