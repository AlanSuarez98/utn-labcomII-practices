var boton = document.getElementById("boton"),
    boton2 = document.getElementById("boton2"),
    caja = document.getElementById("caja");

boton.addEventListener('click', function(){
    boton.classList.add('active');
    caja.classList.add('active');
});
boton2.addEventListener('click', function(){
    boton.classList.remove('active');
    caja.classList.remove('active');
});