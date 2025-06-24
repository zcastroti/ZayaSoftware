// Função - Menu Lateral
const menuLateral = document.getElementById('menuLateral');
const botaoMenuLateral = document.getElementById('botaoMenuLateral');

botaoMenuLateral.addEventListener('click', function() {
    menuLateral.classList.toggle('visivel');
});

document.addEventListener('click', function(event) {
    if (!menuLateral.contains(event.target) && !botaoMenuLateral.contains(event.target)) {
        menuLateral.classList.remove('visivel');
    }
});

// Função - Upload do Logotipo da Empresa
function exibirLogotipoEmpresa(event) {
const entrada = event.target;
const previaLogotipoEmpresa = document.querySelector("img#previaLogotipoEmpresa")
const legendaPreviaLogotipoEmpresa = document.querySelector("p#legendaPreviaLogotipoEmpresa")

if (entrada.files && entrada.files[0]) {
    const leitor = new FileReader();

    leitor.onload = function(e) {
        previaLogotipoEmpresa.src = e.target.result;
        previaLogotipoEmpresa.style.display = "block";
        legendaPreviaLogotipoEmpresa.style.display = "none";
    }
    leitor.readAsDataURL(entrada.files[0]);
}
}
