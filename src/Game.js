'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var Camera = require('famous/components/Camera');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Position = require('famous/components/position');
var Size = require('famous/components/size');
var Mesh = require('famous/webgl-renderables/Mesh');
var Node = require('famous/core/Node');

var Level = require('./Level');
var Ship = require('./Ship');

var GameName = "Famous Space Demo";
var numLevels = 1;
var levels = [numLevels];

var _node;

function Game(scene){
    this._node = scene;
    scene.tagName = GameName;
    // Add a camera component to the scene
    var camera = new Camera(scene)
        .setDepth(800);
    
    // Create first level
    levels[0] = new Level(scene);

    // Create ship
    var ship = new Ship(scene);
    
    // Updates
    FamousEngine.requestUpdate(levels[0]);  
    FamousEngine.requestUpdate(ship);   

}

Game.prototype.onReceive = function(type, payload){
    
}

Game.prototype.onUpdate = function(){
     
}

module.exports = Game;