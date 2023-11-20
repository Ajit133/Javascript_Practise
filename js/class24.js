const numbers = [10, 4, 9, 16, 25]
const newArry = numbers.findIndex((total,value,index,array)=>{
    return total > 10;
},10)
// console.log(newArry);
console.log(newArry);
// console.log(numbers.indexOf(9));
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits.lastIndexOf("Apple"));
console.log(Array.from("ABCDEFGHIJKL"));
console.log(numbers.includes(9))

const q1 = ["janu","Feb","Mearch"];
const q2 = ["April","May","June"];
const q3 = ["July","Aug","Sept"];
const q4 = ["Oct","Nov","Decem"];
const allmoths = [...q1,...q2,...q3,...q4];
console.log(allmoths);