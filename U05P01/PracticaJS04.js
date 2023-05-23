/*
parametro => expresion
(parametro 1, parametro 2) => expresion


FUNCION FLECHA(ARROW)      O           FUNCION SIMPLE
parametro = > {            |          function myFuncion(b){                  
    let a = 1;             |              let a = 1;
    return a + b;          |              return a + b;
}                          |          }
*/
var f = () =>{
    "usar este texto"
    return this;
}

var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function(){
        console.log(this.i, this);
    }
}
obj.b();
obj.c();