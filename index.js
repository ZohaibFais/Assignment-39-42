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