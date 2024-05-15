const prompt = require("prompt-sync")();

function horarioValido(horario) {
  const padraoHorario = /^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return padraoHorario.test(horario);
}

let horarios = [];
while (horarios.length < 5) {
  let horario = prompt(
    `Digite o horário ${horarios.length + 1} (formato HH:MM:SS): `
  );

  if (horarioValido(horario)) {
    horarios.push(horario);
  } else {
    console.log("Horário inválido, tente novamente.");
  }
}

console.log("Horários fornecidos");
horarios.forEach((horario, indice) => {
  console.log(`Horário ${indice + 1}: ${horario}`);
});
