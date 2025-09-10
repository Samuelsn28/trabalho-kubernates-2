
const sidebar = document.getElementById("menu-lateral");
const content = document.getElementById("container-conteudo");

function abreMenuLateral() {
    sidebar.style.left = "0";
    content.style.marginLeft = "250px";
}

function fechaMenuLateral() {
    sidebar.style.left = "-250px";
    content.style.marginLeft = "0";
}

function menuLateralEstaOculto() {
    return sidebar.style.left === "-250px";
}

function alteraVisibilidadeMenuLateral() {
    if (menuLateralEstaOculto()) {
        abreMenuLateral();
    } else {
        fechaMenuLateral();
    }
}
