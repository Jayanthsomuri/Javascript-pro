/*//1.Ways to print in Javascript
//console.log("");
//alert("me";
//document.write("");

//2.Javascript console API
//console.log("Hello world", 4 + 6, "Another log");
//console.warn("this is warning");
//console.error("This is an error");

//3.JavaScript varibales
//variables?-containers to store values
var a=34;
var b=56;


//4.Datatypes in Javascript
var num=1;
var marks={
    ravi:34,
    jayanthsomuri:99,
    nikhilsomuri:100
}
var str1="This is Jayanth somuri";
var str2=" IM frm Hyderabad";
console.log(str1+ str2);
console.log(marks);

var a=true;
var b= false;
console.log(a);
console.log(b);
var und;
console.log(und);
var n;
console.log(null);

At a very high level, there are 2 types of data types in JavaScript
1.primitive: undefined,null,number,string,boolean,symbol
2.Reference data types:arrays,objects

var arr=[1,2,3,4,5];



//5.Operators in Javascript
//Arithemetic operators
console.log("the value of a+b:",a+b);
console.log("the value of a+b:",a-b);
console.log("the value of a+b:",a*b);
console.log("the value of a+b:",a/b);
//Assignment Operators
var c=b;
c*=2;//c=c*2;
c+=2;
c/=2;
c+=2;
//comparison operators
console.log(c);
console.log(a==b);
console.log(a!=b);
console.log(a>=b);
console.log(a<=b);
console.log(a>b);
console.log(a<b);

//Logical Operators
console.log(true && true);
console.log(true && false);
console.log(false&& false);
console.log(false && true);
console.log(true ||true);
console.log(true ||false);
console.log(false||false);
console.log(false|| true);
console.log(!true);
console.log(!false);


//6.Functions in Javascript
function avg(a,b){
    c=(a+b) /2;
    return c;
}
c1=avg(32,54);
console.log(c1);


//7.Conditional statements in Javascript

if(age>18){
    console.log("You are not a kid");
}
else{
    console.log("You are  a kid");

}
var age=18;

if(age>31){
    console.log("You can Vote");
}
else if(age==18){
    console.log("You should Apply for Voter id");
}

else{
    console.log("You cannot vote");

}

//8.Loops

var sum=0;
console.log(arr);
for(var i=0;i<arr.length;i++){
sum+=i;
}
  

console.log(sum);}
var arr=[1,2,3,4,5];
let j=0;



do{
    console.log(arr[j]);
    j++;

}
while(j<arr.length){
    console.log(arr[j]);
    j++;

}
  //9 Break and continue statements
  var sum=0;
  var arr=[1,2,3,4,5];

for(var i=0;i<arr.length;i++){
if(i==2)
{
    break;
}
console.log(arr[i]);
}var arr=[1,2,3,4,5];
for(var i=0;i<arr.length;i++){
    if(i==2)
    {
        continue;
    }
    console.log(arr[i]);
    }

    //10.Array methods
    let myarr=["fan",65,true,"camera",32,null];
console.log(myarr.length);
//myarr.pop();
//myarr.push("Somuri");
//myarr.shift(); removes first element from the array
//myarr.unshift("Jayanth"); Adds element from the element
myarr.sort();
console.log(myarr);

//11.String methods in JavaScript

console.log(mystring.length);
console.log(mystring.lastIndexOf("Intelligent"));
console.log(mystring.indexOf("is"));
let mystring="Jayanth is Intelligent";
console.log(mystring.slice(1,3));    
d=mystring.replace("Jayanth","Nikhil");
console.log(mystring ,d);  

//12.Dates in Javascript
let myDate=new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

//13.DOM(Document Object model)Manupulation in javascript
let lm=document.getElementById("click");
console.log(lm);
let lmclass=document.getElementsByClassName("container");
//lmclass[0].style.background="yellow";
lmclass[0].classList.add("bg-primary");
lmclass[0].classList.add("text-success");
console.log(lm.innerHTML);
console.log(lm.innerText);

console.log(lmclass[0].innerHTML);
console.log(lmclass[0].innerText);
tn=document.getElementsByTagName("button");
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="This is a created  1 para"
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
//createdElement2.innerText="This is a created  2 bold"
tn[0].replaceChild(createdElement2,createdElement);
//removeChild(element);---->removes an element
//Selecting using query
sel=document.querySelector('.container');
console.log(sel)
sel=document.querySelectorAll('.container');
console.log(sel)*/

//14 Events in Javascript
// function clicked(){
//     console.log("The button was clicked")
// }
//window.onload=function(){
//   console.log("The document was loaded")
//}
//container.addEventListener('click',function(){
 //document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>";
//    console.log("Clicked on container");   
//})
/*container.addEventListener('mouseover',function(){
    console.log("Mouse on container");   
   })
container.addEventListener('mouseout',function(){
    console.log("Mouse out of container");   
   })


   container.addEventListener('mouseup',function(){
   
    console.log("Mouse up when clicked on  container");   
   })   
   container.addEventListener('mousedown',function(){ document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>";
   console.log("Clicked on container");  
    console.log("Mouse down when clicked on  container");   
   })   
*/

//15 SetTimout and Setinterval
//Arrow Functions
// function sum(a,b){
//     return a+b;
// }
// sum=(a,b)=>
// {
//     return a+b;
// }
// logkaro=()=>{
//     console.log("Hi IM Jayanth")
// }
// setTimeout(logkaro,2000)
// setInterval(logkaro,2000)

//16.Local storage in JavaScript

// localStorage.setItem('name','somrui');
// localStorage
// localStorage.getItem("name");
//localStorage.removeItem('name')
//localStorage.clear()

//17.JSON(Javascript Object Notation)
// obj={"name":"Jayanth","length":1}
// js=JSON.stringify(obj);
// console.log(js)
// console.log(typeof js)
// parsed=JSON.parse(`{"name":"Jayanth","length":1}`);
// console.log(parsed);
// console.log(typeof parsed);
