// 1st type of function is => naming function
// parameters sand arrguments ..
function show(name1 , name2){
    console.log(name1+" "+name2);
}

// show("Rimsha","Arifa");


// 2nd type of function is => Anoyonmous function

let display=function(name1,name2){
    console.log(name1+" "+name2);
}
// console.log(typeof show)

// display("Rimsha","Arifa")


// 3rd type of function is => Arrow function JS -> ES6
// 1st method to create Arrow Function
let A= (name1,name2)=> name1+name2

// console.log(A("XYZ","ABC"))

let MaxNumber=(num1, num2)=> num1>num2?console.log("Value of Num1 is Larger"):console.log("Value of Num2 is larger");

// MaxNumber(5, 7)


// 2nd Method to create Arrow Function

let Func=(num1,num2)=>{
    num1>num2?console.log("Value of Num1 is Larger"):console.log("Value of Num2 is larger");
}

// Func(67,12);

// 4th type of function is => IIFE  (Immidate invoked Function Expression)

//    (fucniton) ();

(
    function details(){
    console.log("IIFE is working with Arrow func.");
    }
)();




//Q1. write a program that check even , odd or zero number  using above functions.

//Q2. write a program that check leap year or not using above functions.

//Q3. write a program that check positive, Negative or Zero using above functions.

//Q4. write a program that display your Grade according to given critiera 
//    marks>=100 dispaly Invalid Input Marks
//    marks>=90 dispaly A Grade
//    marks>=80 dispaly B Grade
//    marks>=70 dispaly C Grade
//    marks>=60 dispaly D Grade
//    marks>=50 dispaly E Grade
//    otherwise Fail
//  using above functions.


