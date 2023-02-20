// -------------------
// código do carro
// -------------------


// listas dos carros
let xCarros = [600, 600, 600, 600, 820, 730, 600, 850, 900, 860];
let yCarros = [40, 96, 150, 235, 210, 263, 318, 40, 318, 96];
let velocidadeCarros = [2, 2.5, 3.2, 5, 5, 5, 2.4, 2, 2.4, 2.5];
let comprimentoCarro = 70;
let alturaCarro = 40;


// funções do carro1
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -70;
}