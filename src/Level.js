var AstroidField = require('./AstroidField');
var Node = require('famous/core/node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Surface = require('famous/');
var Node = require('famous/core/node');
var Size = require('famous/components/size');
var PointLight = require('famous/webgl-renderables/lights/PointLight');
var Color = require('famous/utilities/Color');

var currentScene;
var size;
var windowSizeX = window.innerWidth;
var windowSizeY = window.innerHeight;

function Level(scene){
    currentScene = scene.addChild();
    this.init();
}

Level.prototype.init = function() {
    // Add size component to current scene
    size = new Size(currentScene);
   
    // Add light to the level
    var lightNode = currentScene.addChild()
        .setAlign(0.5, 0.5, 0.5)
        .setPosition(0, 0, 250);
    var light = new PointLight(lightNode)
        .setColor(new Color('white'));
    
    // Create an astroid field
    var astroidField = new AstroidField(currentScene);
    
    this.isInit = true;
    
    size.onSizeChange = function(size){
        windowSizeX = size[0];
        windowSizeY = size[1];
        console.log("Level :: Window size changed to " + windowSizeX +"x"+windowSizeY);
    }
}



Level.prototype.onSizeChange = function(size){
    console.log("Level::On size change in level");
}

Level.prototype.onParentSizeChange = function(size){
    console.log("Level::parent size changed");
}

// Level update
Level.prototype.onUpdate = function(time){

}

module.exports = Level;