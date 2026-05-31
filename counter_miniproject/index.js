//counter program
let count=0;
const counterlabel=document.getElementById("counterlabel");
const increasebtn=document.getElementById("increasebtn");
const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");

increasebtn.onclick=function(){
    count++;
    counterlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    counterlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    counterlabel.textContent=count;
}

