let p1Name = "Budi";
let p1Health = 100;
let p1Power = 10;

let p2Name = "Doremi";
let p2Health = 100;
let p2Power = 10;

function showStatus(name: string, health: number, power: number) {
  console.log("==============================");
  console.log("Name:", name);
  console.log("Health:", health);
  console.log("Power:", power);
}

function damage(playerNumber: number) {
  if (playerNumber === 1) {
    p2Health = p2Health - p1Power;
    console.log(`${p1Name} hit for ${p1Power} damage to ${p2Name}`);
    console.log("==============================");
  } else if (playerNumber === 2) {
    p1Health = p1Health - p2Power;
    console.log(`${p2Name} hit for ${p2Power} damage to ${p1Name}`);
    console.log("==============================");
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

function useItem(playerNumber: number) {
  let item = randomItem();

  if (playerNumber === 1) {
    if (item === "health") {
      p1Health = p1Health + 10;
      console.log(`${p1Name} health increased by 10`);
    } else {
      p1Power = p1Power + 10;
      console.log(`${p1Name} power increased by 10`);
    }
  } else if (playerNumber === 2) {
    if (item === "health") {
      p2Health = p2Health + 10;
      console.log(`${p2Name} health increased by 10`);
    } else {
      p2Power = p2Power + 10;
      console.log(`${p2Name} power increased by 10`);
    }
  }
}

function start() {
  while (p1Health > 0 && p2Health > 0) {
    console.log("Player 1 Turn");
    showStatus(p1Name, p1Health, p1Power);
    useItem(1);
    damage(1);

    console.log("Player 2 Turn");
    showStatus(p2Name, p2Health, p2Power);
    useItem(2);
    damage(2);

    if (p1Health <= 0 || p2Health <= 0) {
      break;
    }
  }

  if (p1Health > 0) {
    console.log(p1Name + " wins the game");
  } else {
    console.log(p2Name + " wins the game");
  }
}

start();
