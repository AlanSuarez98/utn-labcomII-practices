/*
function myFuncion(nombre = "Desconocido", apellido = "Desconocido", edad = 0){
    console.log(nombre," ", apellido, " ", edad);
}

myFuncion("Alan", "Suarez", 24);
myFuncion();
*/


function myFuncion(param1 =0, ...arrayParam){
    var dato = param1;
    arrayParam.forEach(datosN => dato += " - " + datosN);
    console.log(dato);
}

myFuncion(3,2,1,0);
myFuncion();

function funciones(...arrayVar){
    var dato;
    arrayVar.forEach(datosN => dato += " - " + datosN);
    console.log(dato);
}

funciones(1, 2, 3, 4, 5, 6, 7, 8, 9);
funciones();
funciones("Alan","Renzo","Tomas", "Cande");