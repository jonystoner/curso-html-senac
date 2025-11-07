function imc() {


}

//operadores de logica  
//

let tenhoPao = true;

let tenhoMaionese = true;

let tenhoSalame = true;

let tenhoManteiga = false;

console.log(tenhoPao && tenhoSalame)

console.log(tenhoPao && tenhoMaionese && tenhoSalame)

console.log(tenhoPao && tenhoMaionese && tenhoSalame && tenhoManteiga)




let listaDeTarefasLuigi = ["Tomar Café", "Limpar Casa", "Ir no mercado", "Fazer comida"];

console.log(listaDeTarefasLuigi[2])


const escola = [
    {
        nomeSala: "Sala 1",
        alunos: [
            {
                nome: "Ana",
                materias: {
                    matematica: [8, 7, 9],
                    artes: [6, 5, 7],
                    quimica: [9, 8, 10]
                }
            },
            {
                nome: "Bruno",
                materias: {
                    matematica: [5, 6, 4],
                    artes: [8, 9, 7],
                    quimica: [6, 7, 5]
                }
            },
            {
                nome: "Carla",
                materias: {
                    matematica: [9, 10, 8],
                    artes: [7, 8, 9],
                    quimica: [10, 9, 10]
                }
            }
        ]
    },
    {
        nomeSala: "Sala 2",
        alunos: [
            {
                nome: "Diego",
                materias: {
                    matematica: [6, 7, 5],
                    artes: [9, 8, 9],
                    quimica: [7, 6, 8]
                }
            },
            {
                nome: "Eduarda",
                materias: {
                    matematica: [10, 9, 10],
                    artes: [6, 7, 8],
                    quimica: [9, 10, 9]
                }
            },
            {
                nome: "Felipe",
                materias: {
                    matematica: [4, 5, 6],
                    artes: [5, 6, 5],
                    quimica: [6, 5, 7]
                }
            }
        ]
    }
];


console.log(escola[1].alunos[1].materias.matematica[0], escola[0].alunos[0].nome)


let calculoNota  = escola[0].alunos[0].materias.matematica[0]

console.log(calculoNota)

let baldeAzul = 15;

let baldeVermelho = 12;

//

if (baldeAzul > baldeVermelho) {
    console.log("o balde azul tem mais agua ")
}
else {

    console.log("o balde vermelho tem mais agua")
}


let baldeVerde = 17;

let baldeAmarelo = 22;

if (baldeVerde > baldeAmarelo) {

    console.log("é maior")
}
else{
    console.log("não é maior ")
}



let fraseManha = "Boa dia"

function goodMorning(){
 console.log(fraseManha)
}


goodMorning()