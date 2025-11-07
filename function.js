let idade = 18;

if (idade < 18) {
    console.log("não pode tirar a carta");
} else if (idade >= 18 && idade <= 60) {
    console.log("apto para tirar a carta");
} else if (idade > 60) {
    console.log("reciclagem da carta");
}






function calcular_imc() {

    let peso = 78 
    let altura = 1.72  

    let calculo = peso / (altura * altura)

    let paciente = { nome: "jonathan", idade: "32" }

    console.log(`Olá ${paciente.nome} sua idade é ${paciente.idade} e seu imc é ${calculo}`)

}

calcular_imc()


function calcular_imc_media(altura,peso) {

     let calculo = peso / (altura * altura)

     if (calculo < 18.5 ) {
        console.log("Abaixo do peso")
    }
    else if (calculo >= 18.5 && calculo <= 24.9 ) {
        console.log("Peso Normal")
    }
    else if (calculo >= 25 && calculo <= 29.9 ) {
        console.log("Sobrepeso")
    } 
    else {
        console.log("obesidade")
    }
}

calcular_imc_media(1.80,1005)


function soma_preco(preco, desconto ) {
        let soma =  preco - desconto
        console.log(soma)
}

soma_preco(50,5)



let minhaVez = 10;

// escreva seu loop while aqui
while(minhaVez >= 0 ) {
  console.log(minhaVez --)
}

let variavel = 40

while (variavel >= 0 ){
    console.log(variavel)
    variavel -= 2 

}



for ( j = 0 ; j < 40; j++ ){
    console.log(j)
}



cumprimentar()
            
function cumprimentar() {
  console.log("Bom dia!");
}

if (true) {
  const despedir = function() {
    console.log("Até mais!");
  }
  despedir(); // chamada dentro
}
     

const subtrairTradicional = (a, b) => a - b;
console.log(subtrairTradicional(10,5))


const cu = (valor1,valor2) => {
 return valor1 + valor2

}

console.log(cu(10,35))


const subtrair = (a,b) => a - b

console.log(subtrair(10,5))

 const dividir = (a,b) => a / b;

 console.log(dividir(100, 4))



 let configuracaoVolume = undefined;
let volumePadrao = 75;

let valor = configuracaoVolume ?? volumePadrao

console.log(valor)

let configuracoesPontos = 0;
let pontosPadrao = 100;


let valor2 = configuracoesPontos ?? pontosPadrao

console.log(valor2)