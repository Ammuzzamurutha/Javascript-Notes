//how to accept user input in node js
//1.window prompt()
//2.html text box
let username;
username=window.prompt("Enter your username");
console.log(username);

let username;
document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("myinput").value;
    document.getElementById("myh1").textContent=`hello ${username}`;
}
