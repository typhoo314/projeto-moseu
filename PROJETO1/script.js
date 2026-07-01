const login = document.getElementById("login");

login.addEventListener("submit", function(event){

    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "eu123" && senha == "12345"){
        window.location.href = "resto/home.html";
    }

    else{
        alert("Usuário ou senha incorretos.");
    }

});