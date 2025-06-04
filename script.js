
let xp = 0;
let rank = "E-Rank";
let day = 1;
let challengeBase = 10;
let stats = {
  strength: 10,
  agility: 10,
  stamina: 10,
  intelligence: 10
};

const ranks = [
  { name: "E-Rank", xp: 0 },
  { name: "D-Rank", xp: 100 },
  { name: "C-Rank", xp: 250 },
  { name: "B-Rank", xp: 500 },
  { name: "A-Rank", xp: 750 },
  { name: "Shadow Monarch", xp: 1000 },
  { name: "National Rank", xp: 1300 },
  { name: "God-Level Rank", xp: 1700 },
];

function updateUI() {
  document.getElementById("xp").textContent = xp;
  let currentRank = ranks[ranks.length - 1].name;
  for (let i = 0; i < ranks.length; i++) {
    if (xp < ranks[i].xp) {
      currentRank = ranks[i - 1].name;
      document.getElementById("nextXp").textContent = ranks[i].xp;
      break;
    }
  }
  document.getElementById("rank").textContent = currentRank;
  document.getElementById("strength").textContent = stats.strength;
  document.getElementById("agility").textContent = stats.agility;
  document.getElementById("stamina").textContent = stats.stamina;
  document.getElementById("intelligence").textContent = stats.intelligence;
  document.getElementById("challengeText").textContent = `Do ${challengeBase * Math.pow(2, day - 1)} push-ups`;
}

function completeChallenge() {
  const earnedXP = 50;
  xp += earnedXP;
  stats.strength += 1;
  stats.stamina += 1;
  day++;

  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Challenge Complete!", {
      body: `You earned ${earnedXP} XP. Day ${day - 1} complete!`,
    });
  }

  updateUI();
}

if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission();
}

updateUI();
