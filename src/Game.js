'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var Camera = require('famous/components/Camera');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Position = require('famous/components/position');
var Size = require('famous/components/size');
var Mesh = require('famous/webgl-renderables/Mesh');
var Node = require('famous/core/Node');
var Stats = require('./Stats');

var Level = require('./Level');
var Ship = require('./Ship');

var GameName = "Famous Space Demo";
var numLevels = 1;
var levels = [numLevels];
var showStats = true;


function Game(sceneNode){
    this.node = scene;
    this.tagName = 'Game';
//    scene.tagName = GameName;
    // Create first level
    levels[0] = new Level(sceneNode);

    // Create ship
    var ship = new Ship(sceneNode);
}

if(showStats){
    var stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    update = function() {
        stats.begin();
        stats.end();
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

Game.prototype.onReceive = function(type, payload){
    
}

Game.prototype.onUpdate = function(){
     
}

module.exports = Game;