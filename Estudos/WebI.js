

//npm install prompt-sync // Para usar o prompt no terminal;

//Dentro do terminal, vá diretamente na pasta que o arquivo está e digite:
//node nome_do_arquivo.js

const prompt = require('prompt-sync')(); // Para usar o prompt no terminal;

function helloWorld(){
    console.log("Hello World!")
}

function verifica(){
    try {
        helloWorld();
        const num = prompt('Digite o valor:');
        if(num < 0){
            console.log("O número digitado é negativo!");
        }
        else if (num >= 0) {
            console.log("O número digitado é positivo!");
        }
    }
    finally {
        console.log("Processo finalizado com sucesso...")
    }
}

function voto(){
    try {
        helloWorld();
        const idade = prompt(parseInt('Digite sua idade:'));
        if(idade < 16){
            console.log("Você ainda não pode voltar!");
        }
        else if(idade == 16 || idade == 17){
            console.log("Você já pode voltar, mas não é obrigatório!");
        }
        else if(idade >= 18 || idade <= 70) {
            console.log("Você é obrigado a votar!");
        }
    }
    finally{
        console.log("Processo finalizado com sucesso...")
    }
}


function parImpar(){
    const valor = prompt(parseInt('Digite um valor:'));
    if(valor % 2 == 0){
        console.log("O número é par!")
    }
    else {
        console.log("O número é ímpar!")
    }
}

//verifica();
//voto();
parImpar();
