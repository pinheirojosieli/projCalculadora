let tela =  document.querySelector("input#res").value;
let num1 = [];
let valorNum = num1.join(''); //Concatena os valores do array
let numRecebido = Number(valorNum); //Transforma os valores em Number







function adicionarElemento (entrada){
        var atualizacao = (tela+=entrada);
        tela = document.querySelector("input#res").value = atualizacao.replace(/[^0-9.+x-]/g, '');


    
 

      if (isNaN(entrada)) { //Verifica se o valor adicionado NÃo é um número
     

        console.log("NÃO É NUMERO");

      } else {



       num1.push(entrada) //Adicionar valores ao array


        for(let i=0; i <num1.length; i++){ //Percorre o array
 
          console.log("POSIÇÃO " + i + " É NUMERO  " + num1[i]);

              const valorNum = num1.join(''); //Concatena os valores do array
              const numRecebido = Number(valorNum);  //Transforma os valores em Number

              console.log("aarray " + num1 );
              console.log("valornum " + valorNum );
              console.log("numrecebido " +  numRecebido);

         }
      }
}



function limpar (){
    tela =  document.querySelector("input#res").value = '';

}




  



