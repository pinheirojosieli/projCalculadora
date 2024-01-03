//let tela =  document.querySelector("input#res").value;
let numTela = '';
let numCalc = '';
let num3 = [];
let num4 = '';
let sequencia = [];

/*
let texto = "ABCD7EFGHIJK5LMNOPQ6RSTUVWXYZ";

   let teste = [];
   teste  = texto.split('5');
   console.log("VALOR: " + teste);

*/

function quadrado (){
      if(numCalc.indexOf("+") != -1 || numCalc.indexOf("-") != -1 || numCalc.indexOf("*") != -1 || numCalc.indexOf("/") != -1)  {     
   
    
      sequencia = numCalc.split('+');
      let part1 = sequencia.length;
   
      console.log("QUADRADO: " + sequencia 
      + " TIPO: " + typeof(sequencia)
      + " TAMANHO: " + part1   
      + " PARTE : " + sequencia[part1-1]
   
      );
   


    //  let qua = sequencia[1]
   
   
        /*  console.log(" TEM: " );
      console.log("VALOR NUM 1 : " + numTela);
      console.log("VALOR NUM 2 : " + numCalc );*/
      
      
      } else{ // CALCULA QUANDO NÃO HÁ OPERADORES NA TELA
        console.log("NAO TEM: " );
        numCalc = numCalc * numCalc

        console.log("NAO TEM: " + numCalc);
      resultado(); 
    
      }
  
  
  
  
  
  
  
  
    /*  numCalc += 'q';
      sequencia = numCalc.split('q');
      let part1 = sequencia.length;*/

/*

      console.log("QUADRADO: " + sequencia 
      + " TIPO: " + typeof(sequencia)
      + " TAMANHO: " + part1   
      + " PARTE 2 : " + sequencia[1]
      
 
    
    );

*/

}















function adicionarElemento (entrada){
  



  numTela += entrada;
      
      if(entrada == ','){
        numCalc += '.'
     
        console.log("VALOR é vírgula: " + numTela);



      } else{
              if(entrada == 'x'){

                numCalc += '*';

              }


              else{
                numCalc += entrada;
              }

      }

    tela = document.querySelector("input#res").value = numTela;
      
       
       if(numCalc.indexOf("5") != -1) {

       } else {


       }
    
    //console.log("VALOR NUM 1 : " + numTela);
  //  console.log("VALOR NUM 2 : " + numCalc );
    
   }



  function resultado(){
    

        numCalc = eval(numCalc); //CALCULA OS VALORES
        numTela = `${numCalc}`;


        tela = document.querySelector("input#res").value = numTela.replace('.',','); // MOSTRA O RESULTADO CONVERTENDO O '. 'EM  ', '  
        
        numTela = tela; //ATUALIZA COM VALOR DO RESULTADO;

        console.log("numTela: :  " + numTela + " TIPO "+ typeof(numTela));
        console.log("numCalc: :  " + numCalc +" TIPO " + typeof(numCalc));
       










  }
  

  function limparDigito(){
 
    
    numTela = numTela.replace(/.$/, '');
    numCalc = numTela.replace(',','.')
    tela =  document.querySelector("input#res").value = numTela;
  }
  

  

function limparTela(){
  tela =  document.querySelector("input#res").value = '';
  numTela = '';
  numCalc = '';


  console.log("numTela: :  " + numTela + " TIPO "+ typeof(numTela));
  console.log("numCalc: :  " + numCalc +" TIPO " + typeof(numCalc));



  ;

}







