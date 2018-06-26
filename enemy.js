alert('EnemyScript.js loaded');

var forstMobNames = [
    "rat",
    "pidgeon",
    "angry dog",
    "feral cat"
];

function generateEnemyName() {
    return baseMobNames[Math.round(Math.random() * (baseMobNames.length - 1))];
}