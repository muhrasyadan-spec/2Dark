<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Kasir</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="login-box">
<h2>LOGIN KASIR</h2>

<input type="text" id="username" placeholder="Username">

<input type="password" id="password" placeholder="Password">

<button onclick="login()">Login</button>

<p id="pesan"></p>

</div>

<script src="script.js"></script>

</body>
</html><!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Kasir</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="login-box">
<h2>LOGIN KASIR</h2>

<input type="text" id="username" placeholder="Username">

<input type="password" id="password" placeholder="Password">

<button onclick="login()">Login</button>

<p id="pesan"></p>

</div>

<script src="script.js"></script>

</body>
</html>function login(){

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
