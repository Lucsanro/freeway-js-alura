// funções adicionais

function ganhaJogo(){
  if (meusPontos == 10){
    fimDeJogo();
  }
}

function fimDeJogo(){
  // para e tira carros da tela
  velocidadeCarros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  yCarros = [600, 600, 600, 600, 600, 600, 600, 600, 600, 600];
  
  //tira vaquinha da tela
  xVaquinha = -100;
  
  //tira placar da tela
  yMeusPontos = -100;
  
  // texto para o ganhador
  textSize(70);
  fill(color(255,215,0));
  text("Você ganhou!", 250, 200);
  
  // para musica
  somDaTrilha.stop();
  
  // altera mensagem usuário
  xMensagemUsuario = 250;
  mensagemParaUsuario = "Parabéns! Reinicie para jogar novamente"
}

// função para aumentar velocidade dos carrinhos após certo número de pontos
function aumentaDificuldade(){
  if (meusPontos >= 7 && meusPontos < 10){
    velocidadeCarros = [3.3, 3.9, 4.5, 6.3, 6.3, 6.3, 3.7, 3.3, 3.7, 3.9];
    imagemCarros = [carro4, carro4, carro5, carro4, carro5, carro5, carro5, carro5, carro5, carro4];
  } else {
    velocidadeCarros = [2, 2.5, 3.2, 5, 5, 5, 2.4, 2, 2.4, 2.5];
    imagemCarros = [carro1, carro2, carro3, carro4, carro5, carro5, carro3, carro2, carro1, carro6];
  }
}

// contador de tempo
// créditos: Unagi Veronica, Youtube: https://www.youtube.com/watch?v=RllWOTAl33E
let contador = 0;

function contaTempoDeJogo(){
   if (meusPontos < 10){
    contador += 1/60;
    textSize(20);
    fill(color(220,20,60));
    text(round(contador) + " segundos", 420, 25);
  } else {
    contador += 0;
    textSize(20);
    fill(color(220,20,60));
    text(round(contador) + " segundos", 420, 25);
  }
}

