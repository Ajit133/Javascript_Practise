let a = 123;
let b = a.toString();
console.log(typeof b);
let Expo = 124.345;
let conv = Expo.toExponential(2)
console.log(typeof conv)

let fix = 9.5534543;
// let conver = fix.toFixed(2);
let conver = fix.toFixed()
console.log(conver);
console.log(Number("10"));
console.log(Number("10"));
console.log(Number(" 10"))
console.log(Number("John"))
let convert = parseInt(fix);
console.log(convert);

const arry = ["Ajit","Rone", 20 ,21 ,23 ,45,34];
// iteration of array
const len = arry.length;

for(let i = 0; i<len; i++){
    console.log(arry[i])
}
arry.forEach((item,index)=>{
     console.log(item)
     console.log(index)
})
let value = null;
console.log(null === value)
console.log(isNaN(5))