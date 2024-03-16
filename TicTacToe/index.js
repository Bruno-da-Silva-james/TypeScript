let leitor = require(`readline-sync`);

let tableFirstR = ["O", "O", "O"];
let tableSecondR = ["O", "-", "-"];
let tableThirdR = ["X", "-", "-"];
let firstStart = Math.floor(Math.random() * 2) + 1;

function playerX() {
  return "X";
}

function playerY() {
  return "Y";
}

console.log((tableFirstR[0] && tableFirstR[1]) == 'X' && tableFirstR[2] !== "-");

function winCond(player) {
  if (
    ((tableFirstR[0] && tableFirstR[1]) == 'X' && tableFirstR[2] !== "-") ||
    (tableSecondR[0] === tableSecondR[1] && tableSecondR[1] !== "-") ||
    (tableThirdR[0] === tableSecondR[1] && tableSecondR[1] !== "-") ||
    (tableFirstR[0] === tableSecondR[1] && tableSecondR[1] !== "-") ||
    (tableFirstR[2] === tableSecondR[1] && tableSecondR[1] !== "-") ||
    (tableFirstR[0] === tableSecondR[0] && tableThirdR[0] !== "-") ||
    (tableFirstR[1] === tableSecondR[1] && tableThirdR[1] !== "-") ||
    (tableFirstR[2] === tableSecondR[2] && tableThirdR[2] !== "-")
  ) {
    return `Jogador venceu`;
  }
  return "nao ha ainda";
}

function tableTop(value) {
  console.log("", "", "A", "B", "C");
  console.log(1, tableFirstR[0] + "|" + tableFirstR[1] + "|" + tableFirstR[2]);
  console.log(
    2,
    tableSecondR[0] + "|" + tableSecondR[1] + "|" + tableSecondR[2]
  );
  console.log(3, tableThirdR[0] + "|" + tableThirdR[1] + "|" + tableThirdR[2]);
}

function turns() {
  let menu = true;
  let player = "";
  console.log(`Bem vindo ao jogo!\n `);
  if (firstStart == 1) {
    player = playerX;
  } else {
    player = playerY;
  }

  while (menu) {
    tableTop();
    let jogada = leitor.questionInt(`Jogador ${player} ensira a posiçao: `);
    if (jogada) {
    }
  }
}

console.log(winCond());
