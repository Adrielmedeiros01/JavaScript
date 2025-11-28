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
try {
  //helloW();
  //ternario();
}
finally {
  console.log("Processo finalizado...") 
}