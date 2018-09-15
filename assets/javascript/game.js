$(document).ready(function() {

var characters = {
    'John Snow': {
        name: 'John Snow',
        health: 120,
        attack: 8,
        enemyAttackBack: 15
    }, 
    'Daenerys Targaryen': {
        name: 'Daenerys Targaryen',
        health: 100,
        attack: 14,
        enemyAttackBack: 5
    }, 
    'White Walker': {
        name: 'White Walker',
        health: 150,
        attack: 8,
        enemyAttackBack: 20
    }, 
    'Cersei Lannister': {
        name: 'Cersei Lannister',
        health: 100,
        attack: 7,
        enemyAttackBack: 20
    }
};

var currSelectedCharacter;
var currDefender;
var combatants = [];
var indexofSelChar;
var attackResult;
var turnCounter = 1;
var killCount = 0;

$("#john").on("click",function(){
console.log("John")
$("#john").appendTo("#position-john");
})

$("#daenerys").on("click",function(){
    console.log("daenerys")
    $("#john").appendTo("#position-daenerys");
    })

    $("#white").on("click",function(){
        console.log("white")
        $("#john").appendTo("#position-white");
        })
        $("#cersei").on("click",function(){
            console.log("cersei")
            $("#john").appendTo("#position-cersei");
            })


});