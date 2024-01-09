//let tela =  document.querySelector("input#res").value;
let numTela = '';
let numCalc = '';
let num3 = [];
let num4 = '';
let sequencia = [];




console.log( "NUMTELA: "+  numTela);
console.log( "NUMCALC: "+  numCalc);
console.log( "SEQUENCIA: "+  sequencia);










function verificarOperador (){

        
let  numCalcReverse, numSplit, numSplitReverse, numCalcNovo;
let cont=0;

            numCalcReverse = numCalc.split('').reverse().join('').toString();

 
            for(cont; cont<= numCalcReverse.length; cont++ ){
 

                switch (numCalcReverse[cont]){
                 
                 
                  case "+":
                  numSplit = `${numCalcReverse.split('+', 1)}`;
                  numSplitReverse = numSplit.split('').reverse().join('');
                  numCalcNovo = numCalc.slice(0, numCalc.length-numSplit.length);
                  numTela = numTela.slice(0, numCalc.length-numSplit.length);
                  cont = numCalcReverse.length;


                break;



                case "-":

                numSplit = `${numCalcReverse.split('-', 1)}`;
                numSplitReverse = numSplit.split('').reverse().join('');
                numCalcNovo = numCalc.slice(0, numCalc.length-numSplit.length);
                numTela = numTela.slice(0, numCalc.length-numSplit.length);
                cont = numCalcReverse.length;


               break;


  

               case "/":

               numSplit = `${numCalcReverse.split('/', 1)}`;
               numSplitReverse = numSplit.split('').reverse().join('');
               numCalcNovo = numCalc.slice(0, numCalc.length-numSplit.length);
               numTela = numTela.slice(0, numCalc.length-numSplit.length);
               cont = numCalcReverse.length;

              break;


 

              case "*":

              numSplit = `${numCalcReverse.split('*', 1)}`;
              numSplitReverse = numSplit.split('').reverse().join('');
              numCalcNovo = numCalc.slice(0, numCalc.length-numSplit.length);
              numTela = numTela.slice(0, numCalc.length-numSplit.length);
              cont = numCalcReverse.length;


             break;


             default:

                  numSplitReverse = numCalc;
                  
                  numCalcNovo = '';
                  numTela = '';
                  console.log( "numCalcNovo: "+  numCalcNovo);
                  console.log( "numSplitReverse: "+  numSplitReverse);

                }


            }
 
            numCalc = numCalcNovo;
  
            /*console.log( "NUMTELA: "+  numTela);
            console.log( "NUMC deeeeeeeeentrp: "+  numCalc);
            console.log( "NUMCALCOOOOOOOOONCATENA: "+  numCalcNovo);*/
            
                     return numSplitReverse;


             
     }


























function quadrado (){
  
  let numQuadrado = verificarOperador();

  console.log( "NUMTELA: "+  numTela);
  console.log( "NUMCAL: "+  numCalc);
  console.log( "QUADRADO: "+  numQuadrado);

  numQuadrado *= numQuadrado;
  numTela += `${numQuadrado}`;
  numCalc += `${numQuadrado}`;
  

  
  
tela = document.querySelector("input#res").value = numTela.replace('.',',');




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
      
       
       
console.log( "NUMTELA: "+  numTela);
console.log( "NUMCALC: "+  numCalc);
console.log( "SEQUENCIA: "+  sequencia);





    
  
   }



  function resultado(){
    console.log( "NUMTELA: "+  numTela);
    console.log( "NUMCALC: "+  numCalc);

        numCalc = `${eval(numCalc)}`; //CALCULA OS VALORES
        numTela = `${numCalc}`;

        console.log( "NUMTELA: "+  numTela);
        console.log( "NUMCALC: "+  numCalc);
       // console.log( "SEQUENCIA: "+  numQuadrado);



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


  

}







