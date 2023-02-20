// ----------------------
// Curso: Lógica de programação: laços e listas com JavaScript da Alura
// Link do curso: https://cursos.alura.com.br/course/javascript-listas-lacos
// Aluno: Lucca Rocha
// Início dos estudos: 19/02/2023
// Conclusão dos estudos: Em andamento...
// ----------------------

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraVaquinha();
  mostraCarro();
  movimentaCarro();
  movimentaVaquinha();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  ganhaJogo();
  aumentaDificuldade();
  contaTempoDeJogo();
}

