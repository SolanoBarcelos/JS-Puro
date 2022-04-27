
function clicou () {

    window.open("https://www.linkedin.com/in/solanobarcelos/")
    // window.location.href="https://www.linkedin.com/in/solanobarcelos/";
}


function trocar (elemento) {
    // document.getElementById("obrigado").innerHTML = "Você passou o mouse, obrigado!"
    elemento.innerHTML = "Você passou o mouse, obrigado!"
}



function voltar(elemento) {
    // document.getElementById("obrigado").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mouse aqui!"
}

function carregou() {
    alert("Pagina Carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}