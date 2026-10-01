let a = 10;
let b = 120.5;
let str = "hello";
let t = true;
let n = null;
let z;
let m = 89651498563256852587452n;
let s = "10";
let s1 = 10;
console.log(typeof a);
console.log(typeof b);
console.log(typeof str);
console.log(typeof t);
console.log(typeof n);
console.log(typeof z);
console.log(typeof m);
console.log(typeof s);

console.log(s == s1);
console.log(s === s1);
console.log(true == 1);
console.log(true === 1);

//Strings
let str2 ='HELLO ${10+20}';
let str3 = `JAVA Script  is the 
scripting language  ${10+20}`;

console.log(str2);
console.log(str3);



//String Built functions 
console.log("-----String Built functions ----------");

let str1 = "JAVAScript ${10+20}";
console.log(str1);
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.length);
console.log(str1.includes("J"));

console.log(str1.replaceAll('A','z'));
console.log(str1.replace('A','z'));


console.log(str1.split(" "));
console.log(str1.concat("HELLO"));
console.log(str1.substring(0,4));
console.log(str1.charAt(0));
