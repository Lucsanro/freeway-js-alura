// --------------------
// código das imagens e sons
// --------------------


// variáveis das imagens
let imagemDaEstrada;
let vaquinha;
let carro1;
let carro2;
let carro3;
let carro4;
let carro5;
let carro6;

// variáveis dos sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

// funções
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  vaquinha = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carro4 = loadImage("imagens/carro-4.png");
  carro5 = loadImage("imagens/carro-5.png");
  carro6 = loadImage("imagens/carro-6.png")
  imagemCarros = [carro1, carro2, carro3, carro4, carro5, carro5, carro3, carro2, carro1, carro6];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}