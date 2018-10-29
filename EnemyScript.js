alert('EnemyScript.js loaded');

var baseMobNames = [
    "rat",
    "pidgeon",
    "angry dog",
    "feral cat"
];

function generateEnemyName() {
    return Math.round(Math.random() * (baseMobNames.length - 1));
}