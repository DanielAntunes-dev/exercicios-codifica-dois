const prompt = require("prompt-sync")();

class Hotel {
  constructor(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = Array.from(
      { length: quartosTotais },
      (_, i) => i + 1
    );
  }
}

class Reserva {
  constructor(idReserva, idHotel, numeroQuarto, nomeCliente) {
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.numeroQuarto = numeroQuarto;
    this.nomeCliente = nomeCliente;
  }
}

const hoteis = [];
const reservas = [];
let nextHotelId = 1;
let nextReservaId = 1;


function adicionarHotel() {
  const nome = prompt("Digite o nome do hotel:");
  const cidade = prompt("Digite a cidade do hotel:");
  const quartosTotais = parseInt(prompt("Digite o número total de quartos:"));

  if (!nome || !cidade || isNaN(quartosTotais) || quartosTotais <= 0) {
    console.log("Informações inválidas. Por favor, tente novamente.\n");
    return;
  }

  const hotel = new Hotel(nextHotelId++, nome, cidade, quartosTotais);
  hoteis.push(hotel);
  console.log(`Hotel "${nome}" adicionado com sucesso!\n`);
}


function buscarHoteisPorCidade() {
  const cidade = prompt("Digite a cidade para buscar hotéis:");

  const hoteisNaCidade = hoteis.filter(
    (hotel) => hotel.cidade.toLowerCase() === cidade.toLowerCase()
  );
  if (hoteisNaCidade.length > 0) {
    console.log(`Hotéis disponíveis em ${cidade}:`);
    hoteisNaCidade.forEach((hotel) => {
      console.log(
        `ID: ${hotel.id}, Nome: ${
          hotel.nome
        }, Quartos Disponíveis: ${hotel.quartosDisponiveis.join(", ")}`
      );
    });
  } else {
    console.log(`Nenhum hotel encontrado em ${cidade}`);
  }
  console.log("\n");
}


function listarTodosHoteis() {
  if (hoteis.length > 0) {
    console.log("Hotéis cadastrados no sistema:");
    hoteis.forEach((hotel) => {
      console.log(
        `ID: ${hotel.id}, Nome: ${hotel.nome}, Cidade: ${hotel.cidade}, Quartos Totais: ${hotel.quartosTotais}, Quartos Disponíveis: ${hotel.quartosDisponiveis.length}`
      );
    });
  } else {
    console.log("Nenhum hotel cadastrado no sistema.");
  }
  console.log("\n");
}


function fazerReserva() {
  const idHotel = parseInt(prompt("Digite o ID do hotel para a reserva:"));
  const numeroQuarto = parseInt(prompt("Digite o número do quarto:"));
  const nomeCliente = prompt("Digite o nome do cliente:");

  const hotel = hoteis.find((h) => h.id === idHotel);
  if (!hotel) {
    console.log(`Hotel com ID ${idHotel} não encontrado.\n`);
    return;
  }

  if (hotel.quartosDisponiveis.includes(numeroQuarto)) {
    const reserva = new Reserva(
      nextReservaId++,
      idHotel,
      numeroQuarto,
      nomeCliente
    );
    reservas.push(reserva);
    hotel.quartosDisponiveis = hotel.quartosDisponiveis.filter(
      (q) => q !== numeroQuarto
    );
    console.log(
      `Reserva feita com sucesso! ID da reserva: ${reserva.idReserva}, Quarto: ${reserva.numeroQuarto}\n`
    );
  } else {
    console.log(
      `Quarto ${numeroQuarto} não disponível no hotel ${hotel.nome}\n`
    );
  }
}


function cancelarReserva() {
  const idReserva = parseInt(prompt("Digite o ID da reserva a ser cancelada:"));

  const reservaIndex = reservas.findIndex((r) => r.idReserva === idReserva);
  if (reservaIndex === -1) {
    console.log(`Reserva com ID ${idReserva} não encontrada.\n`);
    return;
  }

  const reserva = reservas[reservaIndex];
  const hotel = hoteis.find((h) => h.id === reserva.idHotel);
  if (hotel) {
    hotel.quartosDisponiveis.push(reserva.numeroQuarto);
    hotel.quartosDisponiveis.sort((a, b) => a - b);
  }
  reservas.splice(reservaIndex, 1);
  console.log(`Reserva ${idReserva} cancelada com sucesso!\n`);
}

function listarReservas() {
  if (reservas.length > 0) {
    console.log("Reservas:");
    reservas.forEach((reserva) => {
      const hotel = hoteis.find((h) => h.id === reserva.idHotel);
      console.log(
        `ID Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome}, Quarto: ${reserva.numeroQuarto}, Cliente: ${reserva.nomeCliente}`
      );
    });
  } else {
    console.log("Nenhuma reserva encontrada.");
  }
  console.log("\n");
}


function menu() {
  let opcao = "";
  do {
    opcao = prompt(
      "Escolha uma opção:\n" +
        "1. Adicionar hotel\n" +
        "2. Buscar hotéis por cidade\n" +
        "3. Listar todos os hotéis\n" +
        "4. Fazer reserva\n" +
        "5. Cancelar reserva\n" +
        "6. Listar reservas\n" +
        "7. Sair\n"
    );

    switch (opcao) {
      case "1":
        adicionarHotel();
        break;
      case "2":
        buscarHoteisPorCidade();
        break;
      case "3":
        listarTodosHoteis();
        break;
      case "4":
        fazerReserva();
        break;
      case "5":
        cancelarReserva();
        break;
      case "6":
        listarReservas();
        break;
      case "7":
        console.log("Saindo...\n");
        break;
      default:
        console.log("Opção inválida. Tente novamente.\n");
    }
  } while (opcao !== "7");
}

menu();
