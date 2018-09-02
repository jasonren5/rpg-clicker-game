if (debug == 1) {
    alert('EnemyScript.js loaded');
}

var baseMobNames = [
    "rat",
    "pidgeon",
    "angry dog",
    "feral cat"
];


function generateEnemyName() {
    return baseMobNames[Math.round(Math.random() * (baseMobNames.length - 1))];
}


class Enemy {
    constructor(difficulty) {
        this.maxHp = Math.round(Math.pow(10 * difficulty, 1 + difficulty / 10));
        this.hp = this.maxHp;
        this.str = 1;
        this.name = generateEnemyName();
    }
}