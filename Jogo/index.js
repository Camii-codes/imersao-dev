/* Número escolhido.
let numeroSecreto = 581;
let chute; */

// Número aleatório escolhido pelo computador:
let numeroSecreto = parseInt(Math.random() * 1001);
let chute;

while(chute != numeroSecreto) {
    let chute = window.prompt('Digite um número de 1 a 1000')
    if (chute == numeroSecreto) {
        window.alert('Acertou!');
    } else if (chute > numeroSecreto) {
        window.alert('Errou... o número é menor.'); 
    } else if (chute < numeroSecreto) {
        window.alert('Errou... o número é maior.');
    }
}


