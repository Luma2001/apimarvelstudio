import { conexionAPI } from "./services/conectionApi.js";


const contenedorProductos = document.querySelector("[data-productos]");

function crearCard(imagen,nombre,ver,enlace,id){
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
                    <img class="card-img" src="${imagen}"/>
                    <div class="card-container--info">
                        <p>${nombre}</p>
                        <div class="card-container--value">
                            <p>Ahora en: <br><a href="${enlace}" target="_black">${ver}</a></p>
                            <i class="fa-regular fa-trash-can" data-id="${id}"></i>
                        </div>
                    </div>    
    
    `;

    const btnBorrar = card.querySelector("[data-id]");
    const idbtn = btnBorrar.getAttribute("data-id");
    
console.log(btnBorrar);
console.log(imagen);

    btnBorrar.addEventListener("click", async () =>{
        
        await conexionAPI.borrarproducto(idbtn);
        card.remove();
    })
    return card;
}

async function mostrarProductos(){
    const listApi = await conexionAPI.listaproducto();
    console.log(listApi);
    if(listApi.length===0){
        const mensaje = document.createElement("span");
        mensaje.classList="no_hay_productos";
        mensaje.innerText="no se han agregado productos";
        contenedorProductos.appendChild(mensaje);
    }
    listApi.forEach(producto=>{
        contenedorProductos.appendChild(crearCard(producto.imagen, producto.nombre,producto.ver,producto.enlace, producto.id))
        console.log(producto.imagen);
    })

}
mostrarProductos();
