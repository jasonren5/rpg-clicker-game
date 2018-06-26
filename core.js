var playerHp = 30;
var playerMp = 0;
var playerMun = 0;
var playerStrength = 1;
var playerLevel = 1;
var playerXp = 0;

var playerMaxXp = playerMaxXp = Math.round(Math.pow(playerLevel, 1.1)) * 10 + 10;

var enemyMaxHp = 10;
var enemyHp = enemyMaxHp;
var enemyName = 'Poo';

var playerAtkSpd = 100;
var enemyAtkSpd = 1000;

var attack = 0;
var attacking = false;

alert('core.js loaded');

//newEnemy();
refresh();

document.getElementById('main-button').addEventListener('click', mainButtonClick);

function mainButtonClick() {
    if (attacking == false) {
        attack = setInterval(playerAttack, playerAtkSpd);
        attacking = true;
    }
    refresh();
}

function playerAttack() {
    enemyHp = enemyHp - playerStrength;
    if (enemyHp < 1) {
        newEnemy();
        rewardPlayer();
    }
    refresh();
}

function enemyAttack() {

}

function newEnemy() { //also called when an enemy is killed
    //enemyName = generateEnemyName();
    enemyMaxHp = Math.round(enemyMaxHp * 1.1);
    enemyHp = enemyMaxHp;
    if (attacking == true) {
        //clearInterval(attack);
    }
}

function rewardPlayer() { //is called when an enemy is killed
    if (random(10, 4)) {
        playerMun += Math.round(enemyMaxHp * (Math.random() * 2) / 10);
    }
    playerXp += Math.round(Math.pow(enemyMaxHp, 1.1) / (10 + enemyMaxHp) + 3);
    checkLevelUp();
}

function random(upper, cutoff) {
    return (Math.random() * upper > cutoff);
}

function refresh() {
    document.getElementById('playerLevel').innerHTML = Math.round(playerLevel);
    document.getElementById('playerHp').innerHTML = Math.round(playerHp);
    document.getElementById('playerMp').innerHTML = Math.round(playerMp);
    document.getElementById('playerXp').innerHTML = (playerXp * 100 / playerMaxXp).toFixed(2);
    //document.getElementById('playerMaxXp').innerHTML = Math.round(playerMaxXp);
    document.getElementById('enemyHp').innerHTML = Math.round(enemyHp);
    document.getElementById('enemyMaxHp').innerHTML = Math.round(enemyMaxHp);
    document.getElementById('playerMun').innerHTML = Math.round(playerMun);
    document.getElementById('enemyName').innerHTML = enemyName;
    document.getElementById('playerStr').innerHTML = Math.round(playerStrength);
}

function checkLevelUp() {
    playerMaxXp = Math.round(Math.pow(playerLevel, 1.1)) * 10 + 10;
    while (playerXp >= playerMaxXp) {
        levelUp();
    }
}

function levelUp() {
    playerLevel++;
    playerXp -= playerMaxXp;
    playerStrength += 1 + Math.round(Math.random() * playerLevel / 10);
    playerHp += 5;
}