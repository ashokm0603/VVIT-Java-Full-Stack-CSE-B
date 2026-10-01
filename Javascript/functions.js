//Anonymous Function

// normal function/named function
function displayDetails() {
  console.log("normal function/named function");
}
displayDetails();

// normal function/named function with parameters ->When ever if we want to give input to the function then we need to go with function with parameter

function login(username, password) {
  if (username == "admin@12") {
    if (password == "Psw!#18") {
      console.log("Login Successful");
    } else {
      console.error("Invalid Password");
    }
  } else {
    console.error("Invalid username");
  }
}

login("admin@12", "Psw!#18");
login("admin@123", "asdPsw!#18");


//  function with return ->When ever we want result of the function for farther operations
function getDetails(){

}

//functional expression
var funExample = function () {
  console.log("====================================");
  console.log("Anonymous Function");
  console.log("====================================");
};

funExample();
