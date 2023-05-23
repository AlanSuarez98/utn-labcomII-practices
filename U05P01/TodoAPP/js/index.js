let arTask = [];
let strHTML = "";
let contHTML = document.getElementById("dvstrHTML");
function clkAddTask(){
    let newTask = document.getElementById("new-task");

    arTask.push(newTask.value);
    localStorage.tareas = arTask;
    /*newTask.value = "";*/

    let lsTareas = localStorage.tareas;
    
    
    if(lsTareas != undefined){
        let newArTareas = lsTareas.split(",");
        strHTML = "";
        for(let i = 0; i < newArTareas.length; i++){

            strHTML += `<li>
            <input type="checkbox">
            <label id="tareaTXT${i}">${newArTareas[i]}</label>
            <input type="text" id="tareaINP${i}" class="ocultarInput" value="${newArTareas[i]}">
            <button onclick="fnCambiar("${newArTareas[i]}, tareaINP${i}");">Guardar</button>
            <button class="edit" onclick="fnEditar("tareaTXT${i},tareaINP${i}");">
                <i class="fas fa-pen"></i>
            </button>
            <button class="delete" onclick="fnBorrar()><i class="fas fa-trash-alt"></i></button>
        </li>
        `;

        }
        contHTML.innerHTML = strHTML;
    }
}

function fnEditar(campoLabel,campoInput){
    let campLabel = document.getElementById(campoLabel);
    let campInput = document.getElementById(campoInput);

    campLabel.classList.add("ocultarLabel");
    campInput.classList.remove("objCampoInput");
    campInput.classList.add("mostrarInput");
}

function fnCambiar(valorAnterior, nombreCampo){
    //Tomar el valor anterior
    //tomar el valor nuevo
    //Tomar el valor del localStorage
    //Pasarlo a array
    //Buscar la posicion del valor anterior en el array
    //Reemplazar el valor en el array
    //grabar el nuevo array en el localStorage
    let valorNuevo = document.getElementById(nombreCampo);

    let lsTareas = localStorage.tareas;
    let newArTareas = lsTareas.split(",");
    //newArTareas.indexOf(valorAnterior);

    newArTareas.replace(valorAnterior,valorNuevo)
}

function fnBorrar(){
    var ID = newArTareas.indexOf(valorAnterior);
    newArTareas.split(ID);
}