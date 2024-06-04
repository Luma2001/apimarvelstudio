import { prompt } from "./prompt.js";
import { conexionAPI } from "./services/conectionApi.js";


const formulario = document.querySelector("[data-formulario]");
const btnLimpiar = document.querySelector("[data-limpiar]");


async function agregarProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const ver = document.querySelector("[data-ver]").value;
    const enlace = document.querySelector("[data-enlace]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    await conexionAPI.enviarproducto(imagen, nombre,ver,enlace);
    console.log(nombre,ver,enlace,imagen);
    // window.location.href="";
    prompt.confirmacion("Producto agregado con éxito.")
    console.log(imagen);
}

formulario.addEventListener("submit", evento => {
    agregarProducto(evento);
    formulario.reset();
});


btnLimpiar.addEventListener("click", ()=>{
    formulario.reset();
})


