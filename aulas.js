function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}



// 2. Agora, uma função "principal" que RECEBE uma dessas lógicas:
//function calculadora(num1, num2, operacao) {
// 'operacao' aqui é um parâmetro, que esperamos que seja uma função!
//  let resultado = operacao(num1, num2); // Executamos a função que recebemos
//  console.log("O resultado do cálculo é: " + resultado);
//}

//calculadora(30,20,somar)


function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  return a / b
}

function calculadora(valor1, valor2, operacao) {

  let calculo = operacao(valor1, valor2)

  console.log(calculo)
}

calculadora(10, 8, multiplicar)


// 2. Chame a função 'calcular' usando os números 20 e 3, 
// e passe a sua nova função 'multiplicar' como callback.
// chame a função com esses dados 'calcular' aqui:


function calcular(a, b) {
  return a + b
}

function multiplicacoes(valor1, valor2, operacao) {

  let calculo = operacao(valor1, valor2)

  console.log(calculo)
}

multiplicacoes(20, 3, calcular)

let precos = [10, 45, 120];

// 1. Use .map() para criar um novo array 'precosComImposto'
//    onde cada preço é multiplicado por 1.1 (aumento de 10%).
//    Use a sintaxe curta da arrow function (sem return e sem chaves).


let precosComImposto = precos.map((priceimposto) => priceimposto * 1.1)



// 2. Mostre o array 'precosComImposto' no console.

console.log(precosComImposto)

let palavras = ["casa", "carro", "bicicleta", "sol", "lua"];

// 1. Use .filter() para criar um novo array 'palavrasLongas'
//    apenas com as palavras que têm 5 ou mais letras.
//    (Dica: use palavra.length >= 5)

let palavrasCinco = palavras.filter((palavra) => {
  return palavra.length >= 5
})

console.log(palavrasCinco)




let produto = {
  nome: "Notebook",
  preco: 4500,
  estoque: 25
};

// 1. Use Object.keys() para pegar as chaves do 'produto'
//    e use .forEach() nesse array de chaves para mostrar no console
//    cada chave em MAIÚSCULAS.

let produtoNovo = Object.keys(produto)


let valorNovo = produtoNovo.forEach((item) => {
  console.log("Informações do produto(a): " + item.toUpperCase());
});



let dadoProduto = Object.values(produto)

let dadosObject = dadoProduto.forEach( (dados) => {
  console.log("dados(a): " + dados);
} );
