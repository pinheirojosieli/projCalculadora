let tela =  document.querySelector("input#res").value;
let num1 = [];
let num2 = [];
let num3 = [];
let num4 = [];
let sequencia = [];
//let valorNum = num1.join(''); //Concatena os valores do array
//let numRecebido = Number(valorNum);  //Transforma os valores em Number







function adicionarElemento (entrada){
     tela = document.querySelector("input#res").value = tela+=entrada;
     sequencia.push(entrada);

     console.log("É tela: " + tela);

      verSequencia();
/*
        for(let i=0; i <num1.length; i++){ //Percorre o array
              console.log("aarray " + num1 );
              console.log("valornum " + valorNum );
              console.log("numrecebido " +  numRecebido);

         }
      }*/
}


function verSequencia(){


  let valorNum = sequencia.join(''); //Concatena os valores do array
  let numRecebido = Number(valorNum);
  console.log("É NUM1:  " + num1);


  //for(let i=0; i <sequencia.length; i++){ 
    //console.log("SEQUENCIA SALVA: " + sequencia);

    
    if (!isNaN(numRecebido)) { //Verifica se o valor adicionado NÃo é um número
   
      num1.push(numRecebido) //Adicionar valores ao array

      console.log("É NUMRECEBIDO: " + numRecebido);

      } else {
        console.log("NÃO É NUMERO: " + sequencia);
        num1.pop();
        numRecebido = num1.join('');
        console.log("NÃO É NUMERO ATUAL: " + numRecebido);


     // }



   }

   












}




















function limparDigito(){
    num1.pop();
    
    const valorNum = num1.join(''); //Concatena os valores do array
    const numRecebido = Number(valorNum);  //Transforma os valores em Number

    
    console.log("aarray " + num1 );
    console.log("valornum " + valorNum );
    console.log("numrecebido " +  numRecebido);

    //tela = document.querySelector("input#res").value = teste.replace(/[^0-9.+x-]/g, '');


    console.log("aarray " + num1 );
    console.log("valornum " + valorNum );
    console.log("numrecebido " +  numRecebido);

  
}




  

function limparTela (){
  tela =  document.querySelector("input#res").value = '';
  num1 = [];

}







