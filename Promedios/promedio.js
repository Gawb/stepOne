// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

function calcularMediaAritmetica(lista){
//     let sumaLista = 0;

// for (let i = 0; i < lista.length; i++){
//     sumaLista =  sumaLista + lista[i];
// }

const sumaLista = lista.reduce(
    function (valurAcumulado = 0, nuevoElemento){
        return valurAcumulado + nuevoElemento;
    }
);

const promedioLista1 = sumaLista / lista.length;
return promedioLista1;
}