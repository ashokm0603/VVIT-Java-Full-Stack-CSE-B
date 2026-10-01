//Literal way
const arr = [10, 20, 50, 60, 70];
const arr1 = [null, "Java", true, 5120.24, { name: "sai" }];
console.log(arr);
console.log(arr1[0]);

//new Keyword
let skills = new Array("html", "css", "js");
console.log(skills);

//array Inbuilt functions
console.log("----------array Inbuilt functions --------------");

let data = [10, 20, 30, 40, 60];
console.log(data);

data.push(...arr); //ES6   -> insert new elements at last in array
console.log(data);

data.pop(); //remove last element in array
console.log(data);

data.unshift("java", true); //Elements to insert at the start of the array.
console.log(data);

data.shift(); //Removes the first element from an array and returns it
console.log(data);

data.splice(1,2)
console.log(data);

data.splice(2,0,"HELLO",5000)
console.log(data);

data.splice(1,8,"Javascript")
console.log(data);

data.reverse();
console.log(data);


let arr3=[5412,121,32564,12,125];
console.log(arr3.sort());
console.log(arr3.join(" h "));


//input : javascript is the Scripting language
//output1: language Scripting the is javascript
//output2: egaugnal gnitpircS eht si tpircsavaj



let str="javascript is the Scripting language";
console.log(str.split(" ").reverse().join(" "));
console.log(str.split("").reverse().join(""));
