let tela =  document.querySelector("input#res").value;




/*
document.addEventListener('keydown', function(event) {
    console.log(event.altKey); // true ou false
    console.log(event.ctrlKey); // true ou false
    console.log(event.shiftKey); // true ou false
    console.log(event.key); // O nome da tecla que o usuário pressionou
    console.log(event.NONE);

    var leu = event.key;

  });
*/


function adicionarElemento (entrada){

        var c = (tela+=entrada)
      //  tela =  document.querySelector("input#res").value += entrada.replace(/[^0-9.+x-]/g, '');
      //  console.log("MINHA TELA atual: " + c.replace(/[^0-9.+x-]/g, ''));
        tela = document.querySelector("input#res").value = c.replace(/[^0-9.+x-]/g, '');



}


/*
function semLetras (a){

    var c = (a)
  //  tela =  document.querySelector("input#res").value += entrada.replace(/[^0-9.+x-]/g, '');
  //  console.log("MINHA TELA atual: " + c.replace(/[^0-9.+x-]/g, ''));
      console.log("MINHA TELA atual C: " + c.replace(/[^0-9.+x-]/g, ''));
      console.log("MINHA TELA atual tela: " + tela.replace(/[^0-9.+x-]/g, ''));
    tela = document.querySelector("input#res").value = c.replace(/[^0-9.+x-]/g, '');



}

*/












function limpar (){
    tela =  document.querySelector("input#res").value = '';


}




  



