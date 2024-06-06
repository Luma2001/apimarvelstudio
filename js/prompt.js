import { conexionAPI } from "./services/conectionApi.js";

export const prompt = {

    confirmacion: (texto) => {

        
        //1) llama donde aparece prompt     
            const form= document.querySelector(".form");
        
        //2)Creo un elemento donde voy a mostrar la nota que quiero editar    
            const panelPrompt = document.createElement('div'); //acá estamos creando un div
        
        //3)Le asigno una clase a panelEditor
            panelPrompt.className = 'prompt';
        
            //Nota: Mi panel editor debe mostrar:
            //      mensaje: "Producto agregado con éxito.""
            //      boton para ok
       
        //4) Creando el elemento párrafo y agrego mensaje
            const mensaje = document.createElement('p');
            mensaje.textContent =texto;
           
        //5) Creando el boton ok
            const btnAceptar = document.createElement('button');
            let btntexto = document.createTextNode('OK');
            btnAceptar.appendChild(btntexto);

            panelPrompt.append(mensaje, btnAceptar);
        
        //6) Agrego panelPrompt como hijo de form
            form.appendChild(panelPrompt);
            
            btnAceptar.addEventListener('click', ()=>{
                    //a)cierro panelPrompt   
                form.removeChild(panelPrompt);
            })
        

        },  

        borrar: (texto, id) => {

        
            //1) llama donde aparece prompt     
                const main= document.querySelector("main");
            
            //2)Creo un elemento donde voy a mostrar la nota que quiero editar    
                const panelPrompt = document.createElement('div'); //acá estamos creando un div
            
            //3)Le asigno una clase a panelEditor
                panelPrompt.className = 'prompt';
            
                //Nota: Mi panel editor debe mostrar:
                //      mensaje: "Producto agregado con éxito.""
                //      boton para ok
           
            //4) Creando el elemento párrafo y agrego mensaje
                const mensaje = document.createElement('p');
                mensaje.textContent =texto;
               
            //5) Creando el boton ok
                const btnAceptar = document.createElement('button');
                let btntexto = document.createTextNode('OK');
                btnAceptar.appendChild(btntexto);

            //5) Creando el boton cancelar
            const btnCancelar = document.createElement('button');
            let btntext = document.createTextNode('CANCELAR');
            btnCancelar.appendChild(btntext);    
    
                panelPrompt.append(mensaje, btnAceptar, btnCancelar);
            
            //6) Agrego panelPrompt como hijo de main
                main.appendChild(panelPrompt);
                
                btnAceptar.addEventListener('click', async()=>{
                    //a)cierro panelPrompt   
                    await conexionAPI.borrarproducto(id);
                    card.remove();
                    main.removeChild(panelPrompt);
            })

                btnCancelar.addEventListener('click', ()=>{
                        //a)cierro panelPrompt   
                    main.removeChild(panelPrompt);
                })
            
    
            },

    editar: (id)=>{
        //1)llamamos la nota que queremos editar
        const notaParaEditar = document.getElementById(id);

        //Nota: console.log(notaParaEditar.childNodes);//pido un console.log de notaParaEditar para ver los nodos internos en un array.
       
        //2)llamo el id donde quiero que se abra el prompt   
        const tablero = document.getElementById("tablero");

        //3)Creo un elemento donde voy a mostrar la nota que quiero editar    
        const panelEditor = document.createElement('div'); //acá estamos creando un div

        //4)Le asigno una clase a panelEditor
        panelEditor.className = 'prompt';

        //Nota: Mi panel editor debe mostrar: (9)
        //      un textarea para el titulo,(5)
        //      un textarea para la descripcion (6)
        //      y un boton aceptar, para confirmar los cambios.(8)

        //5) Creando el elemento textarea para el titulo y le asigno un id
        const titulo = document.createElement('textarea');
        titulo.id = 'editarTitulo';

        //6) creando el elemento textarea para la descripcion y le asigno un id
        const descripcion = document.createElement('textarea');
        descripcion.id = 'editarDescripcion';

        //7) Asigno textos de titulo y descripcion que quiero editar al textarea correspondiente
            //a)Agrego texto contenido en h4 en titulo
            titulo.textContent=notaParaEditar.childNodes[2].textContent
            //b)Agrego texto contenido en p en descripcion
            descripcion.textContent=notaParaEditar.childNodes[4].textContent;//especificamente llamo el texto contenido en p
        
        //8) Creando el boton aceptar para confirmar cambios
            const btnAceptar = document.createElement('button');
            texto = document.createTextNode('ACEPTAR');
            btnAceptar.appendChild(texto);
        
        //9) Agrego titulo, descripcion y btnAceptar como hijos de panelEditar
            panelEditor.append(titulo,descripcion,btnAceptar);
        
        //10) Agrego panelEditor como hijo de tablero
            tablero.appendChild(panelEditor);
        
        //11) Creo un eventListener para agregar acciones al btnAceptar
            btnAceptar.addEventListener('click', ()=>{
                //a)capturo las modificaciones en el titulo y descripcion
                const nuevoTitulo = document.getElementById('editarTitulo');
                const nuevaDescripcion = document.getElementById('editarDescripcion');
                //b)Copio los valores capturados al titulo y descripcion original
                notaParaEditar.childNodes[2].textContent=nuevoTitulo.value.toUpperCase();
                notaParaEditar.childNodes[4].textContent=nuevaDescripcion.value;
                //c)cierro panel editor    
                const padre = panelEditor.parentNode;//llamo al padre de panelEditor
                padre.removeChild(panelEditor);
                nota.guardar();
            })    
            
    },

}//Fin objeto 