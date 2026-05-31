//random number generator
const counterlabel=document.getElementById("counterlabel");
const rollbtn=document.getElementById("rollbtn");
rollbtn.onclick=function(){
    let randomnum=Math.floor(Math.random()*100)+1;
    counterlabel.textContent=randomnum;
}
