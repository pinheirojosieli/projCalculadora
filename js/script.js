//let tela =  document.querySelector("input#res").value;
let num1 = [];
let num2 = '';
let num3 = [];
let num4 = [];
let sequencia = [];
//let valorNum = num1.join(''); //Concatena os valores do array
//let numRecebido = Number(valorNum);  //Transforma os valores em Number



function adicionarElemento (entrada){
      sequencia.push(entrada); //Adiciona os elementos digitados em um array;
      num1 = sequencia.join(''); // OS elementos tornam-se uma string;
      tela = document.querySelector("input#res").value = num1;

   }



  function somar(){
      num1 = eval(num1.replace(',','.')); //CALCULA OS VALORES NA TELA
      tela = document.querySelector("input#res").value = num1.toString().replace('.',','); // MOSTRA O RESULTADO CONVERTENDO O '. 'EM  ', '  
      sequencia = num1.toString().replace('.',',').split(''); //ATUALIZA O ARRAY; 
     
  }
  

  function limparDigito(){
    sequencia.pop();
    num1 = sequencia.join('');
    tela =  document.querySelector("input#res").value = num1;
  }
  

  

function limparTela(){
  tela =  document.querySelector("input#res").value = '';
  sequencia = [];

}







