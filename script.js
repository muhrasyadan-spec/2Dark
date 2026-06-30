function login(){

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

if(username=="admin" && password=="12345"){

alert("Login Berhasil");

window.location="dashboard.html";

}else{

document.getElementById("pesan").innerHTML="Username atau Password Salah";

document.getElementById("pesan").style.color="red";

}

}

function logout(){

window.location="index.html";

}
