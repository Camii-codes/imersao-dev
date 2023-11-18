let nome = window.prompt('Qual seu nome?');
let valorDolar = window.prompt('Qual o valor?');
let cotacaoDoDolar = 5.32;

let valorReal = valorDolar * cotacaoDoDolar;

window.alert(`Olá ${nome}, o valor em real é R$${valorReal.toFixed(2)}`);