type Player = [string, number, number];

let players: Player[] = [
  ["Budi", 100, 10],
  ["Doremi", 100, 10],
];

function showStatus(player: any[]) {
  console.log("==============================");
  console.log("Name:", player[0]);
  console.log("Health:", player[1]);
  console.log("Power:", player[2]);
}
function damage(attackerIndex: number, defenderIndex: number) {
  let attackerPower = players[attackerIndex][2];
  players[defenderIndex][1] = players[defenderIndex][1] - attackerPower;

  console.log(
    players[attackerIndex][0] +
      " hit " +
      players[defenderIndex][0] +
      " for " +
      attackerPower +
      " damage",
  );

  if (players[defenderIndex][1] < 0) {
    players[defenderIndex][1] = 0;
  }
}

function randomItem() {
  let random = Math.random();

  if (random < 0.5) {
    return "health";
  } else {
    return "power";
  }
}

function useItem(playerIndex: number) {
  let item = randomItem();

  if (item === "health") {
    players[playerIndex][1] = players[playerIndex][1] + 10;
    console.log(players[playerIndex][0] + " health increased by 10");
  } else {
    players[playerIndex][2] = players[playerIndex][2] + 10;
    console.log(players[playerIndex][0] + " power increased by 10");
  }
}

function start() {
  while (players[0][1] > 0 && players[1][1] > 0) {
    showStatus(players[0]);
    useItem(0);
    damage(0, 1);

    showStatus(players[1]);
    useItem(1);
    damage(1, 0);

    if (players[0][1] <= 0 || players[1][1] <= 0) break;
  }

  if (players[0][1] > 0) {
    console.log(players[0][0] + " wins the game!");
  } else {
    console.log(players[1][0] + " wins the game!");
  }
}

start();
