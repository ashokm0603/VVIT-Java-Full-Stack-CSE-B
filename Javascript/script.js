console.log(num);   //hoisting 
var num = 10;  
num = "Java";
console.log(num);
num = true;
console.log(num);
num = null;
console.log(num);



const studentDetails={name:"sai",rollNo:"VVIT2026CSE02"}

class DisplayDetails{
   display(){
        console.log(studentDetails);
    }
}

let d1=new DisplayDetails()
d1.display()
d1.display()
d1.display()
d1.display()
d1.display()



