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
console.log(calulate.add());