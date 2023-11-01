
// // Postal Code Check
// let re = /^[0-9]{4}$/;
// // mobile Number(+8801710977179)(8801710977179)(01710977179)
// re = /^(\+)?(88)?01[3,4,5,6,7,8,9][0-9]{8}$/;
// // Email Address bobubrihi8.learn@edu.com.bd
// // dasajit697@gmail.com
// re = /^([A-Za-z0-9].?)+[^.]@([A-Za-z0-9].?)+[^.]$/
// re = /^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z0-9])+$/
// let str = 'dasajit697@gmail.com'
// // exec ()
// // test()
// // match()
// // search
// // replace
// // let result = re.exec(str)
// // console.log(result);
// // let  result = str.replace(re,'hi')
// // console.log(result)

// console.log(re.exec(str))
// regTest(re,str)

// function regTest(re,str){
//     if(re.test(str)){
//         console.log(` '${str}' matched '${re.source}' `)
//     }
//     else{
//         console.log(`${str} does't  matched ${re} `)
//     }
// }
// object to json
// Object 
// let object_data = {
//     name:"Ajit Das",
//     roll:941061,
//     regi:859042,
//     Dept:"CST",
//     Permanent_Address:"Dhaka,Uttara,sector-12",
//     dob:1999-11-28,
//     text_null:null,
//     text_undefiend:undefined,
//     married:false,
//     all_info: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// // json
// let to_json = JSON.stringify(object_data);
// console.log(to_json)
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = this.responseText;
//         jsonData(data)
        
//     }
// };
// xmlhttp.open("GET", "data.json", true);
// xmlhttp.send();

// function jsonData(data){
//     let to_obj = JSON.parse(data)
//     for(x in to_obj.persons){
//         var persons = to_obj.persons;
//         for (y in persons[x])
//         console.log(persons[x][y]);
//     }
// }
// document.getElementById('get_data').addEventListener('click',loadData);

// function loadData(data){
//     xhr = new XMLHttpRequest();
//     let number = document.getElementById('numberJokes').value
//     xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
     
//     xhr.onprogress = function(){
//         document.getElementById('output').innerHTML = "<h4>Loading.......</h4>"
//     }

//     xhr.onload = function(){
//         if(this.status === 200){
//             let data = JSON.parse(this.responseText);
//             let jokes = data.value;

//             let output = "<ol>";
    
//             jokes.forEach(function(item){
//                 output = output + `<li> ${item.joke} </li>`;
//             });
//             output = output + '</ol>' ; 
//              document.getElementById('output').innerHTML = output ;
//         }
//     }
//     xhr.send()
// }
// let persons = [
//     {firstName:"Ajit",lastName:"Das"},
//     {firstName:"Rone",lastName:"Das"}
// ]
// function CreatePerson(person,getPerson){
//     setTimeout(function(){
//         persons.push(person)
//         getPerson()
//     },3000)
// }

// function getPerson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output = output+ `<li>${person.firstName} ${person.lastName}</li>`            
//         });
//         document.getElementById('output').innerHTML = output;
//     },2000);
// }
// CreatePerson({firstName:"Akhi",lastName:'Das'},getPerson);


// let persons = [
//     {firstName:"Gurab",lastName:"Das"},
//     {firstName:"Sourab",lastName:"Das"}
// ]

// function CreatePerson(person){
//     let prom = new Promise(function(reslove,reject){
//         persons.push(person);
//         reslove();
//     })
//     return prom
// }

// function getPersons(){
//     setTimeout(()=>{
//         let output = ''
//         persons.forEach(function(item){
//             output = output + `<li>${item.firstName} ${item.lastName}</li>`
//             })
//             document.getElementById('output').innerHTML = output
//     },500);
// }
// CreatePerson({firstName:'Abir',lastName:'Das'})
//     .then(getPersons);
// document.getElementById('get_data').addEventListener('click',datafun)

// function datafun(){
//     fetch('http://api.icndb.com/jokes/random')
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data.value.joke);
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }
// Array Destructuring
// let fruits = ['apple','banana','mango','jackfruits']

// let[item0,,item2,item3]=fruits
// console.log(item3)
     
// Swapping
// let a = 10;
// let b = 20;

// [a,b] = [b,a]
// console.log(`a is ${a} and b is ${b}`)

// array Destructuring

// let person = {
//     firstName:'Ajit',
//     lastName:'Das',
//     roll:941061,
//     Address:"Dhaka"
// }

// function Display({firstName,lastName,roll,Address}){
//     console.log(`${firstName},${lastName},${roll},${Address}`)

// }
// Display(person)
// Spread Operator
// let fruits = ['Mango','Zackfruits','Banana'];
// let fruits1 = ['Cucamber','Pineapple'];
// let fruits2 = 'Orange';
// let all_fruits = [...fruits,fruits2,...fruits1]
// // console.log(all_fruits)
// // Spread on Array
// let person = {
//     fname:"Ajit",
//     lname:"Das"
// }
// let newarr = {...person,dob:'28-11-1999',address:'Dhaka'}
// console.log(newarr)
// let numbers = [20,10,-1,13,25]
// console.log(Math.max(...numbers));

// let arr = ["Ajit","Das"]

// let arrow = (fname,lname) =>{
//     console.log(`Hello ${fname} ${lname}`);
// }
//arrow(...arr)

// function sum(...input){
//     sum = 0
//     for(let x of input){
//         sum = sum+x
//     }
//     return sum;
// }
// //console.log(sum(1,2,3));
// console.log(sum(1,2,3))
// class Person{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
// }
// person1 = new Person('BMW','2020')
// console.log(person1)

// iterator
// let names = ["Ajit","Rone","Gurab","Saurab","Pranta"]
// //  let iterator = numbers[Symbol.iterator]();
// // Custom iterator 
// function customIterator(arr){
//     let i = 0
//     return{
//         next : function(){
//             return i < arr.length ? {value:arr[i++],
//                 done: false } : { value:undefined, done:true }
//         }
//     };
// }
// let members = customIterator(names);
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());

// Generators
// function* genFunction(){
//     console.log("Hello Ajit")
//     yield 1;
//     yield 'Ajit';
//     console.log("Hello Ajit");
//     console.log("Hello Ajit");
//     console.log("Hello Ajit");
//     console.log("Hello Ajit");
//     yield 'Das';
    
//     yield "Fulgazi";
//     yield '28-11-1999';

// }
// let iter = genFunction()

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// const mypromise = new Promise((myResolve,myReject)=>{
//     setTimeout(()=>{
//         myResolve('I love You!!!');
//     },3000);
// });

// mypromise.then((value) =>{
//     document.getElementById('demo').innerHTML = value ;
// });
// function myDisplayer(some){
//     document.getElementById('demo').innerHTML = some;
// }
// function getFile(myCallback){
//     let xml = new XMLHttpRequest();
//     xml.open('GET','data.json');
//     xml.onload = function(){
//         if (xml.status == 200){
//             data =JSON.parse(this.response)
//             console.log(data.persons)
            
//             myCallback(this.responseText);
//         }else{
//             myCallback('Error:' + xml.status)
//         }
//     }
//     xml.send();
// }
// getFile(myDisplayer);
// let prom = new Promise((reslove,reject)=>{
//     setTimeout(() => {
//     let i = 1+1
//     if(i == 2){
//         reslove("Successfull");
//     }else{
//         reject("Failed!!!");
//     }
//     }, 3000);
    
// })
// prom.then((message)=>{
//     console.log('The function is ' + message)
// }).catch((message)=>{
//     console.log('The function is ' + message)
// })
// console.log("hello i am there!!!")

// fetch('http://api.icndb.com/jokes/random/5000')
    //  .then(response => response.json())
    //  .then(data => console.log(data))
     

// async function getjokes(){
//     let response = await fetch('http://api.icndb.com/jokes/random/5000');
//     let value = await response.json()
//     return value
// }
// getjokes().then( data =>{console.log(data)})
// Use of Set
// let setA = new Set([1,2,3,3,4,5,6,7,8,9])

// let setb = setA.entries()

// console.log(setb.next());

// function addTwo(a,b){
//     return a + b;
// }
// const x = addTwo(10,20);
// console.log(x)
// let x = (0.2*10+0.2*10) / 10 ; 
// console.log(x)

// function myFunc(a,b,c,d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
    
// }
// let num = [5,6,7,8,9]

// myFunc(...num)

// Rest_Operator 
// fetch('https://jsonplaceholder.typicode.com/posts')
//  .then((data)=>{
//       console.log(data.json())
// }).catch(()=>{
//     console.log("This is Failed")
// })

// const takeOrder = (customer,callback)=>{
//      console.log(`take order for ${customer}`);
//      callback(customer)
// };

// const processOrder = (customer,callback)=>{
//        console.log(`processing order for ${customer}`);
       
//        setTimeout(() => {
//         console.log(`cooking completed`);
//         console.log(`order processed for ${customer}`);
//         callback(customer)
//        }, 3000);
// }

// const completeOrder = (customer)=>{
//      console.log(`completed order for ${customer}`);
// }
// takeOrder('customer 1',(customer)=>{
//         processOrder(customer,(customer)=>{
//             completeOrder(customer)
//         })
// })
// const user = {
//     name:"Ajit Das",
//     roll : 20234203001,
//     favourite : {
//         food : "Burger",
//         travelling_sports : "Cox's Bazer",
//     },
//     phone_number : [{
//         first_number : "0171097719",
//         second_number : "01999684478",
//     }],
//     dept : "CSE",
//     permanent_addresss : "Feni,Fulgazi",
// }
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// const userForm = JSON.parse(userJSON);
// console.log(userForm);

const data = {
    name:"Ajit Das",
    nickname : "Ajit",
    old : 23,
    dept : "CSE",
}


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
     .then(response => response.json())
     .then(json => console.log(json))
     .catch(error=>alert(error));

// function displayUser(user){
//     const userNames = user.map(user => user.username);  
//     // console.log(userNames)  
//     const ul = document.getElementById("users-container");

//     for (let i=0; i<userNames.length; i++){
//         const username = userNames[i]
//         const li = document.createElement("li")
//         ul.appendChild(li);
//         li.innerText = username;
//     }
    
// }

