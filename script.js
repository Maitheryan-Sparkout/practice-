/*
function test(){

   console.log("Hello");

}

let result = test();

console.log(result);


function add(a,b){
    return (a+b);
}
let result1=add(20,10);
console.log(result1);

function attendance(name = "Unknown Student"){
    console.log(name + " is present");
}

attendance("Rahul");
attendance(null);

function expenses(...amount){
    console.log(amount);
}
expenses(60,40,20,50);

function greet(name){
    console.log("Hello "+ name);
}
function sample(text){
    text("jegan");
}
sample(greet);

function prepareFood(item){
    return item + " is ready";
}

function orderFood(callback){
    console.log(callback("Pizza"));
    
}

orderFood(prepareFood);


(function (){
   let password = "1234";

   console.log("Secure");

})();


let data = ["Maddy", 21, true];
console.log(data);

let fruits = ["Apple","Mango"];

fruits.forEach(fruit => {

   console.log(fruit);

});

let nums = [10,20,30];

let [a,,c] = nums;

console.log();


let car={
name:"Honda civic",
model:2020,
color:"black",
type:"Automatic"
};
console.log(car);

let person = {

   name : "Maddy",
   age : 21,
   city : "Chennai"

};

console.log(person);


let movie={
    name:"KGF",
    actor:"Yash",
    part:2,
    year:2022,
};

console.log(movie.name);
console.log(movie["actor"]);
console.log(movie["year"]);


let user={
    name:"karthi",
    age:20,
    
}
user.city="coimbatore";
delete user.age;
console.log(user);

let person = {

   name : "Maddy",

   greet : function(){

      console.log("Hello "+this.name);

   }

};

person.greet();


let calculator={
    add:function(a,b){
        return a+b;

    }
};
console.log(calculator.add(20,50));

let person = {

   name : "Maddy",
   age : 21

};

let name = person.name;
let age = person.age;

console.log(name);
console.log(age);

let user = {
   name: "Maddy"
};

let name = user;

console.log(user);


let student={
    name:"Arun",
    mark:{
        maths:90,
        science:85,
        tamil:100,

    }
};
console.log(student.mark);


let student={
    name:"Arun",
    age:25,
    marks:{
        maths:65,
        english:70,
        tamil:90,

        show:function(){
            console.log(this.english);
        }
    }
}
student.marks.show();



let heading=document.createElement("h1");
heading.textContent="welcome";

let colors = ["Red","Blue"];

let [a,b] = colors;

console.log(a);
console.log();

let user={
    name:"maddy",
    age:22

};
let{name,age}=user;
console.log(name);

export function add(a, b){
    return a + b;
}


let promise=new Promise(function(resolve,reject){
    resolve("success");
});
promise.then(function(hello){
    console.log(data);
});

function greet(a,b){
    console.log(a+b);
}
function adding(callback){
    callback(20,30);
}
adding(greet);


let promise = new Promise (function (resolve,reject){
    let success= false;

    if(success){
        resolve("success");
    }
    else{
        reject("rejected")
    }

});
promise
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});


function fetchData(){

   return new Promise(resolve => {

      setTimeout(() => {

         resolve("Data Loaded");

      },2000);

   });

}
async function getData() {
    let result=await fetchData();
    console.log(result);
    
}
getData();


function laptop(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hello everyone");
        }, 5000);
    });
}
async function mobile() {
    console.log("waiting for message");
    let data=await laptop();
    console.log(data);
    
}
mobile();


fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

   console.log(data);

});


fetch("https://jsonplaceholder.typicode.com/users/5")
.then(function(response){

    return response.json();

})
.then(function(data){

    console.log(data.name);

});


fetch("https://example.com/api", {

   method:"POST",

   headers:{
      "Content-Type":"application/json"
   },

   body: JSON.stringify({

      name:"Maddy"

   })

});


fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        title: "Hello",
        body: "JavaScript"
    })

})
.then(function(response){

    return response.json();

})
.then(function(data){

    console.log(data);

});

try{

   JSON.parse("Hello");

}
catch(error){

   console.log("Invalid JSON");

}

try{

    let result = 10 / 0;

    

}
catch(error){

    console.log("Error Found");

}

try{

  let JSON "name";

}
catch(error){

   console.log("Invalid JSON");

}

try{

    let name = "maddy";

    console.log(name.toLowerCase());

}
catch(error){

    console.log("Error Found");

}
*/

let password = "";

try{

   if(password === ""){

      throw "Password Required";

   }

}
catch(error){
    console.log(error);
}