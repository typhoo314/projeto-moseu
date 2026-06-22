function entrar() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        document.getElementById("msg").textContent = "Preencha tudo!";
        return;
    }

    if (usuario === "eu123" && senha === "123") {
        document.getElementById("msg").textContent = "Login OK!";
        window.location.href = "projeto/home.html";
    } else {
        document.getElementById("msg").textContent = "Erro no login!";
    }
}