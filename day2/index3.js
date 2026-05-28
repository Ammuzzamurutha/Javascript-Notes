//constants
const PI=3.14;
let radius;
let circumference;
document.getElementById("mybutton").onclick=function(){
    radius=document.getElementById("myinput").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myh3").textContent="the circumference is "+circumference;
}
