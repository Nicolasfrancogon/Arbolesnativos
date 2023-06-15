function ingreso(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

    var bDUser = localStorage.getItem('user00');
    var bDPass = localStorage.getItem('pass00');

    if(username === bDUser && password === bDPass){
        alert("Inicio de sesión exitosa");
        window.location.href = ""

    }else{
        alert("credenciales invalidas. Intentalo de nuevo.")
    }
    //alert(bDUser);
    //alert(bDPass);
}

localStorage.setItem("user00","franco");
localStorage.setItem("pass00",1234);