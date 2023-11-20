// const cars = ["Volvo","Mezda","Corolla","BMW","Mercedes"]
// console.log(cars.length)
// // console.log(cars.sort())
// const persons = {
//     name:"Ajit Das",
//     Roll : "2023300201",
//     district : "Feni"
// }
// console.log(persons.district)
// // accesing the last array element
// // console.log(cars[cars.length - 1])
// cars.push("Lambo")

// let fruits = ["Banana","Mango","Pineapple","Strawberry"]
// document.getElementById("demo").innerHTML = fruits;

// function myfunction(){
//      fruits.push("Lemon");
//      document.getElementById("demo").innerHTML = fruits;
// }

// let names = ["Ajit","Rone","Gurab","Sajib"];

// names.push("Pranta")
// console.log(names.sort())
// let newarr = new Array(40)
// console.log(newarr);
// console.log(Array.isArray(names))
// console.log(Array.isArray(persons))
// const fruits2 = fruits.pop()
// console.log(fruits2)
// console.log(fruits)
// const new2 = fruits.shift()
// console.log(fruits)
// console.log(new2)
// use concat 
// const name1 = ["Ajit","Roni","Gurab","Surab"]
// const name2 = ["Sajib","Bijoy","Abir"]
// const newarr = name1.concat(name2)
// console.log(newarr)
// console.log(name1)
// console.log(name2)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Pineapple","Jackfruits")
// console.log(fruits)

const books = ["DLD","Programming c","History"]
books.splice(3,0,"Math","English")
// console.log(books)

const office_stuff = ["Bidhan","Ajit","Abid","Shuvo","Dhrubo"]
office_stuff.splice(3,2,"Roni","Gurab")
// console.log(office_stuff);

const sub = ["English","Math","Programming","English2","Bangla"]
sub.splice(3,2,"DLD","History")

const fruits_name = [ "Banana","Apple",	"Atemoya","Apricot","Avocado" ,"Blueberr"]
// fruits_name.splice(4,2,"Blackcurrant",	"Ackee", "Cranberry")
// fruits_name.splice(3,1,"Jackfruit","Mango");
const newarr =  fruits_name.slice(1,3)
// const number = [90,40,39,58,47,89,46,73,38]
// console.log(newarr)
// console.log(number.sort())
fruits_name.sort()
fruits_name.reverse()
console.log(fruits_name);
const number = [20,10,87,56,76,34,12,32,1,5]
number.sort((a,b)=>{
       return a - b;
})

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("sort").innerHTML = points;

function myfunction1(){
       points.sort()
       document.getElementById("sort").innerHTML = points;
}
function myfunction2(){
       points.sort((a,b)=>{
              return a - b 
       })
       document.getElementById("sort").innerHTML = points;
}
function myfunction3(){
       points.sort(()=>{
              return 0.5 - Math.random()
       })
       document.getElementById("sort").innerHTML = points;
}

function myfunction4(){
       points.sort((a,b)=>{
              return a - b 
       })
       document.getElementById("sort").innerHTML = points[0];
}
function myfunction5(){
       points.sort((a,b)=>{
              return a - b 
       })
       document.getElementById("sort").innerHTML = points[points.length - 1];
}
const newNumber = [30,26,46,18,10,29,28,11,9,5,3,2];
maxNumber(newNumber);
// newNumber.sort((a,b)=>{
//          return a - b
// })
function maxNumber(newNumber){
       console.log(Math.max(newNumber))
}
// Sorting in Object
const cars = [
       {type:"Volvo", year:2016},
       {type:"Saab", year:2001},
       {type:"BMW", year:2010}
 ];
 const newcars = cars.sort((a,b)=>{
      return a.year - b.year
 } )
console.log(newcars)

const newnumberArray = newNumber.forEach((value)=>
          console.log(value)
)