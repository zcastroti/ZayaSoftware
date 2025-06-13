const menuLateral = document.getElementById('menuLateral');
const botaoMenu = document.getElementById('botao-menu');

botaoMenu.addEventListener('click', function() {
    menuLateral.classList.toggle('visivel');
});

document.addEventListener('click', function(event) {
    if (!menuLateral.contains(event.target) && !botaoMenu.contains(event.target)) {
        menuLateral.classList.remove('visivel');
    }
});
