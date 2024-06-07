function contarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

function executarVerificacao(gabarito, alunos) {
  alunos.forEach((aluno, index) => {
    const respostas = aluno;
    const acertos = contarAcertos(gabarito, respostas);

    console.log(`Aluno ${index + 1}: ${acertos} acertos`);
    if (acertos >= 12) {
      console.log("APROVADO");
    } else {
      console.log("REPROVADO");
    }
  });
}

const gabarito = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "A",
  "B",
  "C",
  "D",
  "E",
  "A",
  "B",
  "C",
  "D",
  "E",
  "A",
  "B",
  "C",
  "D",
  "E",
];
const alunos = [
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
  ], // Aluno 1
  [
    "A",
    "B",
    "A",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "A",
    "A",
    "B",
    "C",
    "D",
    "E",
  ], // Aluno 2
];

// Executar as operações com o gabarito e os alunos de exemplo
executarVerificacao(gabarito, alunos);
