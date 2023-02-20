// --------------------
// código da vaquinha
// --------------------


// variáveis da vaquinha
let xVaquinha = 85;
let yVaquinha = 366;
let colidiu = false
let meusPontos = 0;
let yMeusPontos = 27;

// mensagem para usuário
let mensagemParaUsuario = "Faça 10 pontos para ganhar!";
let xMensagemUsuario = 380
let yMensagemUsuario = 388;


// funções da vaquinha
function mostraVaquinha(){
  image(vaquinha, xVaquinha, yVaquinha, 30, 30);
}

function movimentaVaquinha(){
  if (keyIsDown(UP_ARROW)){
    yVaquinha -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yVaquinha += 3; 
    }
  }
}

// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaquinha, yVaquinha, 15);
    if(colidiu){
      voltaVaquinhaParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaVaquinhaParaPosicaoInicial(){
  yVaquinha = 386;
}

function incluiPontos(){
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(20);
  fill(color(220,20,60));
  text(meusPontos, width / 5, yMeusPontos);
  textSize(17);
  fill(color(220,20,60));
  text(mensagemParaUsuario, xMensagemUsuario, yMensagemUsuario);
}

function marcaPonto(){
  if (yVaquinha < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaVaquinhaParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yVaquinha < 387;
}

