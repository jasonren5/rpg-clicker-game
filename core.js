var playerHp = 30;
var playerMp = 0;
var playerMun = 0;
var playerStrength = 1;
var playerLevel = 1;
var playerXp = 0;

var playerMaxXp = playerMaxXp = Math.round(Math.pow(playerLevel, 1.1)) * 10 + 10;

var playerAtkSpd = 100;
var enemyAtkSpd = 1000;

var attack = 0;
var attacking = false;

alert('core.js loaded');

newEnemy();
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
    enemy.hp = enemy.hp - playerStrength;
    if (enemy.hp < 1) {
        newEnemy();
        rewardPlayer();
    }
    refresh();
}

function enemyAttack() {

}

function newEnemy() { //also called when an enemy is killed
    //enemyName = generateEnemyName();
    //enemyMaxHp = Math.round(enemyMaxHp * 1.1);
    //enemy.hp = enemyMaxHp;
    //if (attacking == true) {
    //clearInterval(attack);
    //}
    enemy = new Enemy(1);
}

function rewardPlayer() { //is called when an enemy is killed
    if (random(10, 4)) {
        playerMun += Math.round(enemy.maxHp * (Math.random() * 2) / 10);
    }
    playerXp += Math.round(Math.pow(enemy.maxHp, 1.1) / (10 + enemy.maxHp) + 3);
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
    document.getElementById('enemyHp').innerHTML = Math.round(enemy.hp);
    document.getElementById('enemyMaxHp').innerHTML = Math.round(enemy.maxHp);
    document.getElementById('playerMun').innerHTML = Math.round(playerMun);
    document.getElementById('enemyName').innerHTML = enemy.name;
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