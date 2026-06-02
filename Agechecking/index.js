const number=document.getElementById("age");
const submit=document.getElementById("submit");
const result=document.getElementById("result");
let age;

submit.onclick=function(){
    age=number.value;
    age=Number(age);
if(age>=100){
 
 result.textContent="you are too old to enter this site";
}
else if(age===0){
 
 result.textContent="you are too young to enter this site";
}
else if(age>=18){

    result.textContent="welcome to the site";
}
else if(age<0){
    
    result.textContent="age cannot be negative";
}
else{
    
    result.textContent="you are a minor, you cannot enter this site";
}
}
