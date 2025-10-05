
const sidebar = document.getElementById("menu-lateral");
const content = document.getElementById("container-conteudo");
var menuLateralEstaOculto = true;

function abreMenuLateral() {
    sidebar.style.left = "0";
    content.style.marginLeft = "250px";
}

function fechaMenuLateral() {
    sidebar.style.left = "-250px";
    content.style.marginLeft = "0";
}


function alteraVisibilidadeMenuLateral() {
    if (menuLateralEstaOculto) {
        abreMenuLateral();
    } else {
        fechaMenuLateral();
    }
    menuLateralEstaOculto = !menuLateralEstaOculto;
}
