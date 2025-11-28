// REVISÃO GERAL JS:
function helloW(){
  // Output terminal;
  console.log("Hello World!"); 
}
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
    function input(){   
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
        console.log("1) somar, 2) dimunir, 3) multiplicar, 4) dividir, 5) modulo, 6) potência");
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
            console.log("OPS...tente novamente!");
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

try {
  //helloW();
  //ternario();
  //increment();
  //decrement();
  //operadoresArit();
}
finally {
  console.log("Processo finalizado...") 
}
