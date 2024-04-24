function entrarSite() {
    let user = document.getElementById("nome").value == "senac";
    let password = document.getElementById("senha").value == "senac123";
    let email = document.getElementById("email").value == "senac@senac.com.br";
    let date;

    if (user && password && email) 
    {
        alert("Acesso realizado");
        window.location.href = "pagina_principal.html";
    } else {
        alert("Algo está errado");
    }
}
function LimparCampo() {
    user = document.getElementById('nome').value='';
    password = document.getElementById('senha').value='';
    email = document.getElementById('email').value='';
    date = document.getElementById('date').value='';
}

function TrocaSenha()
{
    window.location.href = "trocasenha.html";

    user = document.getElementById('nome').value == '';
    password = document.getElementById('senha').value == '';
    email = document.getElementById('email').value == '';
}