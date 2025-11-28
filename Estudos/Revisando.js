// REVISÃO GERAL JS:


// Tratamento de ERROS:
try {
  helloW();
  dataType();
  //ternario();
  //voto();
  //parImpar();
  //increment();
  //decrement();
  //operadoresArit();
}
catch{
    console.log("Ops... Ocorreu algum ERRO!\n");
}

finally {
  console.log("Processo finalizado...\n") 
}


//Tipos de dados:
function dataType(){
    let a = "'Nome'";
    let b = 5;
    let c = []; // Objeto;
    let d = {}; // Objeto;
    let e = function nome(){}; // function;
    let f = null; ///objeto;
    let txtrand = 5678;
    let t = toString(txtrand); // Também da pra faze com [] || {};
    console.log(`${a} = ${typeof(a)}\n`);
    console.log(`${b} = ${typeof(b)}\n`);
    console.log(`${c} = ${typeof(c)}\n`);
    console.log(`${d} = ${typeof(d)}\n`);
    console.log(`${e} = ${typeof(e)}\n`);
    console.log(`${f} = ${typeof(f)}`);
    console.log(`${txtrand} = ${typeof(txtrand)}: Tranformada em string = ${typeof(t)}`);
}
function helloW(){
  // Output terminal;
  console.log("Hello World!"); 
  console.log("--------------------------------------------------------\n");
}
//Ternário:
function ternario(){
  // Variável let p/ valores não constantes;
  let v1 = 10;
  let v2 = 20;
  // Ternário: teste/ocasiao ? true : false;
  let teste = v1 > v2 ? "sim":"não";
  // Estrutura condicional:
  if(teste == 'não'){
    //Usando template string '$(var)' ao invés de concatenar '+';
    console.log(`${v1} não é maior que ${v2}!`);   
  }
  else{
    console.log(`${v1} é maior que ${v2}!`);   
  }
}
//output:
function output(){
    console.log("Hello"); // No console;
    //document.writeln("Hello");  // No documento html;
    //window.alert("Hello"); //pop-up na janela do navegador;
}
// Operadores aritméticos:
function operadoresArit(){
    const prompt = require('prompt-sync')(); // Necessário para a entrada de dados pelo prompt;
    //npm install prompt-sync // Para usar o prompt no terminal;
    //Dentro do terminal, vá diretamente na pasta que o arquivo está e digite:
    //node nome_do_arquivo.js
    function input(){   
        //let var1 = Number(prompt("Digite o primeiro valor:")); // Já convertido para números:
        //let var2 = Number(prompt("Digite o segundo valor: "));
        let var1 = prompt("Digite o primeiro valor:");
        let var2 = prompt("Digite o segundo valor: ");
        if (isNaN(var1) || isNaN(var2)) {
            voteable = "A entrada não é um número!";
            console.log(voteable);
            input();
        }
        else{
            escolha();
        }
    }
    function escolha(){
        console.log("1) somar, 2) dimunir, 3) multiplicar, 4) dividir, 5) modulo, 6) potência\n");
        aux1 = parseInt(prompt("Digite o número da opção que deseja:"));
        if(aux1 === 1){
            let soma = var1 + var2;
            console.log(`A soma de ${var1} + ${var2} = ${soma}`);
        }
        else if(aux1 === 2){
            let diminuir = var1 - var2;
            console.log(`A subtração de ${var1} - ${var2} = ${diminuir}`);
        }
        else if(aux1 === 3){
            let multip = var1 * var2;
            console.log(`A multiplicação de ${var1} X ${var2} = ${multip}`);
        }
        else if(aux1 === 4){
            let divid = var1 / var2;
            console.log(`A divisão de ${var1} / ${var2} = ${divid}`);
        }
        else if(aux1 === 5){
            let modulo = var1 % var2;
            console.log(`O resto da divisão de ${var1} / ${var2} = ${modulo}`);
        }
        else if(aux1 === 6){
            let potencia = var1 ** var2;
            console.log(`A otência de de ${var1} elevado a ${var2} = ${potencia}`);
        }
        else{
            console.log("OPS...tente novamente!\n");
            escolha();
        }
    }
    input();
}
//Incrementos while:
function increment(){
    let i = 1;
    while(i <= 10){
        console.log(i);
        i++; // i = i + 1;
    }
}
//Decrementos For:
function decrement(){
    for(let i = 10; i>=1; i--){
        console.log(i);
    }
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

/*
Comparações:
==	equal to:
    x == 8	false	
    x == 5	true	
    x == "5"	true	
===	equal value and equal type:
    x === 5	true	
    x === "5"	false	
!=	not equal:
    x != 8	true	
!==	not equal value or not equal type:	
    x !== 5	false	
    x !== "5"	true	
    x !== 8	true	
> greater than:
	x > 8	false	
< less than:
	x < 8	true	
>= greater than or equal to:
	x >= 8	false	
<= less than or equal to:
	x <= 8	true

Todos os operadores de comparação acima também podem ser usados ​​em strings:
*/
