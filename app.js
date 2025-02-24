function visualizarPagina(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

visualizarPagina('h1','Hora do Desafio');

let numeroEscolhido1 = parseInt(prompt('Escolha o primeiro número para ser utilizado'));
let numeroEscolhido2 = parseInt(prompt('Escolha o segundo número para ser utilizado'));
let numeroEscolhido3 = parseInt(prompt('Escolha o terceiro número para ser utilizado'));
let nomeUsuario = prompt('Olá, boa tarde! Escolha seu nome de usuário.');

function salutMaFriend(nome) {
        console.log('Olá, mundo!');
        let amigo = nome;
        console.log(`E olá ${amigo}!`);
}

salutMaFriend(nomeUsuario);

// Desafio da primeira aula
// function botãoClicadoConsole() {
//     console.log('o botão foi clicado, mano');
// }

// function alertaAmor() {
//     alert('Eu sou apaixonado por Rock Serrano');
// }

// function cidadeBrasil() {
//     let ultimaCidade = prompt('Qual foi a última cidade que você visitou no Brasil?');
//     alert('Estive em ' + ultimaCidade + ', e lembrei de você.');
// }

// function somaNumeros() {
//     let numero_1 = parseInt(prompt('Escolha o primeiro número a ser somado'));
//     let numero_2 = parseInt(prompt('Escolha o segundo número a ser somado'));
//     let soma = numero_1 + numero_2
//     alert(soma)
// }

// Desafio da segunda aula
function quadradoNumeros() {
    let operaçãoQuadrado1 = numeroEscolhido1 ** numeroEscolhido1;
    let operaçãoQuadrado2 = numeroEscolhido2 ** numeroEscolhido2;
    let operaçãoQuadrado3 = numeroEscolhido3 ** numeroEscolhido3;
    alert(`Os números quadrados dos 3 números escolhidos são, respectivamente, ${operaçãoQuadrado1}, ${operaçãoQuadrado2} e ${operaçãoQuadrado3}.`);
}

function mediaNumeros() {
    let operacaoMedia = (numeroEscolhido1 + numeroEscolhido2 + numeroEscolhido3)/2
    alert(`A media dos 3 números é ${operacaoMedia}.`);
}

function maiorNumero() {
    if (numeroEscolhido1 > numeroEscolhido2 && numeroEscolhido1 > numeroEscolhido3) {
        alert('O maior número entre todos é ' + numeroEscolhido1);
    } else if (numeroEscolhido2 > numeroEscolhido3 && numeroEscolhido2 > numeroEscolhido1) {
        alert('O maior número entre todos é ' + numeroEscolhido2);
    } else {
        alert('O maior número entre todos é ' + numeroEscolhido3);
    }
}

function multiplicacaoNumeros() {
    let operacaoMultiply = numeroEscolhido1 * numeroEscolhido2 * numeroEscolhido3;
    alert('O resultado da multiplicação entre os três números é ' + operacaoMultiply);
}
    


