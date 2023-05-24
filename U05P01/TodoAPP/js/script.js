let arTask = [];
let strHtmlTask = '';
let contHtml = document.getElementById('dvStrHtml');
let complHtml = document.getElementById('dvCompletHtml');
let lsTareas;

function onLoad() {
    lsTareas = localStorage.getItem('tareas');
    contHtml.innerHTML = '';
  
    if (lsTareas != undefined) {
      arTask = lsTareas.split(',');
      strHtmlTask = '';
  
      if (arTask.length > 0) {
        for (var i = 0; i < arTask.length; i++) {
          strHtmlTask += armaHTML(i, arTask[i]);
        }
      } else {
        strHtmlTask = '<li>No hay tareas pendientes</li>';
      }
  
      contHtml.innerHTML = strHtmlTask;
    } else {
      strHtmlTask = '<li>No hay tareas pendientes</li>';
      contHtml.innerHTML = strHtmlTask;
    }
}
  

function clkAddTask() {
  let taskNew = document.getElementById('new-task');

  if (taskNew.value !== '') {
    arTask.push(taskNew.value);
    localStorage.setItem('tareas', arTask);
    taskNew.value = '';
  }

  lsTareas = localStorage.getItem('tareas');

  if (lsTareas != undefined) {
    let newArTareas = lsTareas.split(',');
    strHtmlTask = '';

    for (var i = 0; i < newArTareas.length; i++) {
      strHtmlTask += armaHTML(i, newArTareas[i]);
    }

    contHtml.innerHTML = strHtmlTask;
  }
}

function fnEditar(campoLabel, campoInput) {
  let objCampoLabel = document.getElementById(campoLabel);
  let objCampoInput = document.getElementById(campoInput);

  objCampoLabel.classList.add('ocultaImput');
  objCampoInput.classList.remove('ocultaImput');
  objCampoInput.classList.add('mostrarImput');
  onLoad();
}

function armaHTML(idTask, nameTask) {
  let strHtmlTask = `<li>
    <input type="checkbox" id="tareaCKB${idTask}" onclick="fnCompleted(${idTask, nameTask})">
    <label id="tareaTXT${idTask}">${nameTask}</label>
    <input type="text" id="tareaINP${idTask}" class="ocultaImput" value="${nameTask}">
    <button onclick="fnCambiar('${nameTask}', 'tareaINP${idTask}')">Guardar</button>
    <button class="edit" onclick="fnEditar('tareaTXT${idTask}','tareaINP${idTask}');">
      <i class="fas fa-pen"></i>
    </button>
    <button class="delete" onclick="fnBorrar('${nameTask}')">
      <i class="fas fa-trash-alt"></i>
    </button>
  </li>`;

  return strHtmlTask;
}

function armaHTML2(idTask, nameTask) {
    let strHtmlTask = `<li>
      <input type="checkbox" id="tareaCKB${idTask}" checked>
      <label id="tareaTXT${idTask}">${nameTask}</label>
      <input type="text" id="tareaINP${idTask}" class="ocultaImput" value="${nameTask}">
      <button onclick="fnCambiar('${nameTask}', 'tareaINP${idTask}')">Guardar</button>
      <button class="edit" onclick="fnEditar('tareaTXT${idTask}','tareaINP${idTask}');">
        <i class="fas fa-pen"></i>
      </button>
      <button class="delete" onclick="fnBorrar('${nameTask}')">
        <i class="fas fa-trash-alt"></i>
      </button>
    </li>`;
  
    return strHtmlTask;
  }
function fnCompleted(ID, nameTask){
    lsTareas = localStorage.getItem('tareas');
    let check = document.getElementById(ID);
    let name = document.getElementById(nameTask);
    let lista = document.getElementById('dvStrHtml').getElementsByTagName('li');

  if (lsTareas != undefined) {
    let newArTareas = lsTareas.split(',');
    strHtmlTask = '';
    for (var i = 0; i < lista.length; i++) {
      var checkbox = lista[i].getElementsByTagName('input')[0];
      if (checkbox.checked) {
        for(let j=0; j< newArTareas.length; j++){
            if(name == newArTareas[j]){
                newArTareas.removeChild(j);
                localStorage.setItem("tareas", newArTareas);
            }
        }
        
        
        alert('Se encontró un checkbox marcado en el elemento ' + (i + 1) + '.');
        break; // Detener el bucle si se encuentra un checkbox marcado
      }
    }
    complHtml.innerHTML = strHtmlTask;
  }
}

function fnCambiar(valorAnterior, NombreCampo) {
    let valorNuevo = document.getElementById(NombreCampo).value;
  
    let lsTareas = localStorage.getItem('tareas');
  
    if (lsTareas != undefined) {
        let newArTareas = lsTareas.split(',');
        let index = newArTareas.indexOf(valorAnterior);
  
        if (index !== -1) {
            newArTareas[index] = valorNuevo;
            localStorage.setItem('tareas', newArTareas);
            onLoad();
        }   
    }
}
  

function fnBorrar(valor) {
    let lsTareas = localStorage.getItem('tareas');
  
    if (lsTareas != undefined) {
        let newArTareas = lsTareas.split(',');
        let index = newArTareas.indexOf(valor);
  
        if (index !== -1) {
            newArTareas.splice(index, 1);
            localStorage.setItem('tareas', newArTareas);
            onLoad();
        }
  
        if (newArTareas.length === 0) {
            localStorage.removeItem('tareas');
            onLoad();
        }
    }
}
  