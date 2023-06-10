//Array 

const arr=['Ali','Usman','Bilal'];
//check type of Array return as a object
// console.log(typeof arr);

const arr2=new Array(12,23,14,15);
//check type of Array return as a object
// console.log(typeof arr2);


// arr.push('Khan');
// console.log(arr);

// arr.pop();
// console.log(arr);


//For Loop
for(var i=0; i<arr.length;i++)
{
    console.log(arr2[i]);
}

// For In Loop

for(let x in arr){
    if(arr[x]=="Alii"){
        console.log("Value is Found"+arr[x]);
        break;
    }
}

// For IN Loop on Objects
const obj={
    name:"Rashid",
    father:"Sajid",
    contact:3069806080,
    mydetailes:()=>{
        console.log(this.name + " " +this.father + " " + this.contact);
    }
}

for(keys in obj){
    // console.log(keys)
    if(keys=='mydetailes')
    {
        console.log(obj.mydetailes());
    }
}