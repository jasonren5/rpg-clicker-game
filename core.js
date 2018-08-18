//there has to be a better way than just initializing all of these variables at the start 

var playerHp = 30;
var playerMp = 0;
var playerMun = 0;
var playerStrength = 1;
var playerLevel = 1;
var playerXp = 0;

var playerMaxXp = playerMaxXp = Math.round(Math.pow(playerLevel, 1.1)) * 10 + 10;

var playerAtkSpd = 200;
var enemyAtkSpd = 1000;

var attack = 0;
var attacking = false;

var zone = 1; //the zone (or difficulty). floored at 1

var debug = 1; //1 activates debug mode

if (debug == 1) {
    alert('core.js loaded');
}

newEnemy();
refresh();

document.getElementById('main-button').addEventListener('click', mainButtonClick);
document.getElementById('dec-diff').addEventListener('click', decDiff);
document.getElementById('inc-diff').addEventListener('click', incDiff);

//when the attack button is clicked
function mainButtonClick() {
    if (attacking == false) {
        enemyFight = setInterval(enemyAttack, enemyAtkSpd);
        playerFight = setInterval(playerAttack, playerAtkSpd);
        attacking = true;
    }
    refresh();
}

function playerAttack() {
    enemy.hp = enemy.hp - playerStrength;
    if (enemy.hp < 1) {
        clearInterval(enemyFight);
        newEnemy();
        rewardPlayer();
    }
    refresh();
}

//enemyattack function. TODO: currently the player cannot die
function enemyAttack() {
    playerHp = playerHp - enemy.str;
    refresh();
}

function newEnemy() { //also called when an enemy is killed
    //if (attacking == true) {  //TODO: remove these comments so new encounters do not start automatically
    //clearInterval(playerFight);
    //}
    enemy = new Enemy(zone);
}

//is called when an enemy is killed
//TODO: revise money/xp formulas; XP needs to be tuned up at higher levels
function rewardPlayer() {
    if (random(10, 4)) {
        playerMun += Math.round(enemy.maxHp * (Math.random() * 2) / 10);
    }
    playerXp += Math.round(Math.pow(enemy.maxHp, 1.1) / (10 + enemy.maxHp) + 3);
    checkLevelUp();
}

function random(upper, cutoff) {
    return (Math.random() * upper > cutoff);
}

function refresh() { //refreshes numbers. TODO: make this more efficient?
    document.getElementById('playerLevel').innerHTML = Math.round(playerLevel);
    document.getElementById('playerHp').innerHTML = Math.round(playerHp);
    document.getElementById('playerMp').innerHTML = Math.round(playerMp);
    document.getElementById('playerXp').innerHTML = (playerXp * 100 / playerMaxXp).toFixed(2);
    document.getElementById('enemyHp').innerHTML = Math.round(enemy.hp);
    document.getElementById('enemyMaxHp').innerHTML = Math.round(enemy.maxHp);
    document.getElementById('playerMun').innerHTML = Math.round(playerMun);
    document.getElementById('enemyName').innerHTML = enemy.name;
    document.getElementById('playerStr').innerHTML = Math.round(playerStrength);
    document.getElementById('diff').innerHTML = zone;
}


//called whenever the player earns XP
//  TODO: maybe should calculate playerMaxXp somewhere else?
function checkLevelUp() {
    playerMaxXp = Math.round(Math.pow(playerLevel, 1.1)) * 10 + 10;
    while (playerXp >= playerMaxXp) {
        levelUp();
    }
}

//called when the character's xp has surpassed the maxxp. Increases the level of the player,
//  and also increases their power (so far only includes HP and Str)
function levelUp() {
    playerLevel++;
    playerXp -= playerMaxXp;
    playerStrength += 1 + Math.round(Math.random() * playerLevel / 10);
    playerHp += 5;
}

//Used when the '-' button is clicked to decrease the difficulty of the enemy
function decDiff() {
    if (zone > 1) {
        zone--;
        newEnemy();
    }
}

//Used when the '+' difficulty is clicked to increase the difficulty of the zone
function incDiff() {
    zone++
    newEnemy();
}