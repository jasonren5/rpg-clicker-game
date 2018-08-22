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