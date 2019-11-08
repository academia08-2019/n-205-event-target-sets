let quadradinhos = document.querySelectorAll('div');

function trocarCor(event) {
    event.target.style.backgroundColor = "purple";
    console.log(event);
}

for (let quadradinho of quadradinhos) {
    quadradinho.onclick = trocarCor;
}

// CONTADOR
let textoContador = document.querySelector('h1');
let tempoDoContador = Number(prompt("Digita o tempo, cara. EM SEGUNDOS"));

function contador() {
    tempoDoContador--;
    textoContador.innerHTML = tempoDoContador;
    if(tempoDoContador == 0){
        clearInterval(idIntervalo);
    }
}

console.log(contador());

let idIntervalo = setInterval(contador, 1000);
