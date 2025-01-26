
let listaNombres = [];
let elemento = document.querySelector('#listaAmigos');
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if ( nombreAmigo == ''){
        return alert('Porfavor Ingrese un nombre valido')
    }
    let nombreCap = nombreAmigo[0].toUpperCase() + nombreAmigo.slice(1).toLowerCase();
    listaNombres.push(nombreCap)
    elemento.innerText += `${nombreCap}\n`
    limpiarTexto();
};

function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}


function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    elemento.innerHTML = '';
    let numeroAleatorio = Math.floor(Math.random()*listaNombres.length)
    return resultado.innerHTML = `Tu amigo secreto sera: ${listaNombres[numeroAleatorio]}`
}