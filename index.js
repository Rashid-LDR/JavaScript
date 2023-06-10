// var Car={
//     name:"Rashid",
//     age:27,
//     calulate:()=>{
//         return this.name+this.age
//     }
// }
//  var x=Car.calulate()

// console.log(x)


const calulate={
    nam:0,
    num:0,
    add:()=>{
        return this.nam + this.num;
    }
}

this.nam=5;
this.num=5;
// console.log(calulate.add());


var Calculator={
    num1:5,
    num2:2,
    add:(x,y)=>{
        this.num1=x;
        this.num2=y;
        return this.num1 + this.num2;
    },
    subtraction:(x,y)=>{
        this.num1=x;
        this.num2=y;
        return this.num1 - this.num2;
    },
    multiplication:(x,y)=>{
        this.num1=x;
        this.num2=y;
        return this.num1 * this.num2;
    },
    division:(x,y)=>{
        this.num1=x;
        this.num2=y;
        return this.num1 / this.num2;
    },
    remainder:()=>{
         console.log(this.num1) ; console.log(this.num2);
    }


}

// console.log("Addition is : "+Calculator.add(3,5));
// console.log("Subtraction is : "+Calculator.subtraction(3,5));
// console.log("Multiplication is : "+Calculator.multiplication(3,5));
// console.log("Division is : "+Calculator.division(3,5));
console.log("Remainder : "+Calculator.remainder());