'use strict';

var FamousEngine = Famous.core.FamousEngine;
var Camera = Famous.components.Camera;
var DOMElement = Famous.domRenderables.DOMElement;
var Position = Famous.components.position;
var Size = Famous.components.size;
var Mesh = Famous.webglRenderables.Mesh;
var Node = Famous.core.Node;
var Stats = Stats;

// var Level = Level;
// var Ship = Ship;

var GameName = "Famous Space Demo";
var numLevels = 1;
var levels = [numLevels];
var showStats = true;


function Game(sceneNode){
    console.log("Creating game...");
    this.node = sceneNode;
    this.node.tagName = 'Game';
    // // Create first level
    // levels[0] = this.node.addChild();
    // levels[0].addComponent(new Level(levels[0]));
    // // Create ship
    // var player = this.node.addChild();
    // player.addComponent(new Ship(player));
}

Game.prototype.test = function(){
    console.log("Game:Test");
}

// Game statistics (fps)
// if(showStats){
//     var stats, update;
//     stats = new Stats();
//     stats.setMode(0);
//     stats.domElement.style.position = 'absolute';
//     stats.domElement.style.left = '0px';
//     stats.domElement.style.top = '0px';
//     document.body.appendChild(stats.domElement);
//     update = function() {
//         stats.begin();
//         stats.end();
//         requestAnimationFrame(update);
//     };
//     requestAnimationFrame(update);
// }

Game.prototype.onReceive = function(type, payload){
    
}

Game.prototype.onUpdate = function(){
     
}

// module.exports = Game;