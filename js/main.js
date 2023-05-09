const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function barra(){
    document.getElementsByClassName("inputbuscar").style.display = 'block';
}

function cierre(){
    document.getElementsByClassName("inputbuscar").style.display = 'none';
}
