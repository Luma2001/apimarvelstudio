
async function listaproducto(){
    
    try {
        const conexion = await fetch ("http://localhost:3000/productos",{
        method:"GET" ,
        headers:{
            "Content-type":"application/json",
        }   
    })

    const respuesta = await conexion.json();
    return respuesta;
    } catch (error) {
        console.log(error);
    }
    
}

async function enviarproducto(imagen,nombre, ver, enlace){
    const conexion = await fetch ("http://localhost:3000/productos",{
        method:"POST" ,
        headers:{"Content-type":"application/json"},   
        body:JSON.stringify({
            nombre: nombre,
            ver: ver,
            enlace:enlace,
            imagen: imagen,
            
        })
    })
    const conexionconvertida = await conexion.json();
    return conexionconvertida;
}

async function borrarproducto(id) {
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    });

    // Verificar si hay contenido en la respuesta antes de intentar parsearlo
    if (conexion.ok) {
        const contentType = conexion.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
            const data = await conexion.json();
            console.log(data);
        } else {
            console.log('Producto borrado, pero no se recibió JSON.');
        }
    } else {
        console.error('Error al borrar el producto:', conexion.statusText);
    }
}

export const conexionAPI={
    listaproducto, enviarproducto, borrarproducto
}