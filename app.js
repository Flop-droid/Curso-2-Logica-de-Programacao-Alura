let nomeUsuario = prompt('Olá, boa tarde! Escolha seu nome de usuário.');

function visualizarPagina(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function paginaInicial() {
    visualizarPagina('h1','Hora do Desafio');
    visualizarPagina('p',`teste o seu conhecimento, ${nomeUsuario}!`);
}

function salutMaFriend(nome) {
    let novoUsuario = nome;
    console.log(`O usuário ${nome} se registrou no sistema.`);
}

salutMaFriend(nomeUsuario);

paginaInicial();

// let listaDeConhecimentos = ['Javascript','C','C#','Python'];

// Desafio da terceira aula

// realizar o câmbio do dolár para o real
function cambio(dolar) {
    valorCotacaoDolar = 4.80;
    valorConvertidoParaReal = parseFloat(dolar * valorCotacaoDolar);
    return valorConvertidoParaReal
}

// realizar o cálculo do IMC do usuário
function IMC(altura, peso) {
    calculoDoIMC = peso/(altura**2)

    if (calculoDoIMC >= 25) {
        let mensagemPeso = calculoDoIMC < 30 ? 'sobrepeso' : 'obesidade';
        console.log(`Seu IMC é ${calculoDoIMC}. Você está acima do peso recomendado na categoria "${mensagemPeso}", consulte um nutricionista.`);

    } else if (calculoDoIMC < 25 && calculoDoIMC >= 18.6) {
        console.log(`Seu IMC é ${calculoDoIMC}, continue assim!` );
    } else {
        let mensagemRecebidaMenos
        console.log(`Seu IMC é ${calculoDoIMC}. Você está abaixo do peso recomendado, consulte um nutricionista.`);
    }
}

// realizar o cálculo fatorial de um número escolhido pelo usuário
function factorial(numero_fatorial) {
    let listaDosCalculos = [];
    let escolhidoNumero = numero_fatorial;

    if (numero_fatorial <= 1) {
        visualizarPagina('p',`O resultado da fatorial é 1.`);
    }

    while (numero_fatorial != 0) {
        let resultadoCalculo = numero_fatorial * (numero_fatorial - 1);
        listaDosCalculos.push(resultadoCalculo);
        console.log(listaDosCalculos);
        numero_fatorial = numero_fatorial - 2;
    }
    let fatorialMultiplica = 1;
    let tamanhoLista = listaDosCalculos.length;

    for (let i = 0; i < tamanhoLista; i++) {
        fatorialMultiplica *= listaDosCalculos[i];
    }
    console.log(fatorialMultiplica)
    visualizarPagina('p',`O fatorial de ${escolhidoNumero} é ${fatorialMultiplica}.`);
}

// realizar o cálculo do perímetro e da área do usuário
function calculoSala(largura, altura, raio) {
    // reunir as duas funções em apenas uma.
    let tipoDeSala = prompt('Qual tipo de sala é a sua? Retangular (R) ou Circular (C)');

    if (tipoDeSala == 'r' || tipoDeSala == 'R') {
        let calculoPerimetro = (2*largura) + (2*altura);
        let calculoArea = largura * altura;
        console.log(`A área e o perímetro da sala retangular é respectivamente ${calculoArea} e ${calculoPerimetro}.`);
    } else {
        let calculoPerimetro = 3.14*(2*raio);
        let calculoArea = 3.14*(raio**2);
        console.log(`A área e o perímetro da sala circular é respectivamente ${calculoArea} e ${calculoPerimetro}.`);
    }
}

// realizar a tabuada de 1 à 10
function tabuada(numeroDaTabuada) {
    let multiplicador = 1;
        
    while (multiplicador <= 10)  {
        let listaTabuada = [];
        let calculoTabuada = numeroDaTabuada * multiplicador;
        listaTabuada.push(calculoTabuada);
        console.log(listaTabuada);
        multiplicador++
    } 
}


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

// let numeroEscolhido1 = parseInt(prompt('Escolha o primeiro número para ser utilizado'));
// let numeroEscolhido2 = parseInt(prompt('Escolha o segundo número para ser utilizado'));
// let numeroEscolhido3 = parseInt(prompt('Escolha o terceiro número para ser utilizado'));
// let nomeUsuario = prompt('Olá, boa tarde! Escolha seu nome de usuário.');

// function quadradoNumeros() {
//     let operaçãoQuadrado1 = numeroEscolhido1 ** numeroEscolhido1;
//     let operaçãoQuadrado2 = numeroEscolhido2 ** numeroEscolhido2;
//     let operaçãoQuadrado3 = numeroEscolhido3 ** numeroEscolhido3;
//     alert(`Os números quadrados dos 3 números escolhidos são, respectivamente, ${operaçãoQuadrado1}, ${operaçãoQuadrado2} e ${operaçãoQuadrado3}.`);
// }

// function mediaNumeros() {
//     let operacaoMedia = (numeroEscolhido1 + numeroEscolhido2 + numeroEscolhido3)/2
//     alert(`A media dos 3 números é ${operacaoMedia}.`);
// }

// function maiorNumero() {
//     if (numeroEscolhido1 > numeroEscolhido2 && numeroEscolhido1 > numeroEscolhido3) {
//         alert('O maior número entre todos é ' + numeroEscolhido1);
//     } else if (numeroEscolhido2 > numeroEscolhido3 && numeroEscolhido2 > numeroEscolhido1) {
//         alert('O maior número entre todos é ' + numeroEscolhido2);
//     } else {
//         alert('O maior número entre todos é ' + numeroEscolhido3);
//     }
// }

// function multiplicacaoNumeros() {
//     let operacaoMultiply = numeroEscolhido1 * numeroEscolhido2 * numeroEscolhido3;
//     alert('O resultado da multiplicação entre os três números é ' + operacaoMultiply);
// }