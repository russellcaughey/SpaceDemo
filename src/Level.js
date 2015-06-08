var AstroidField = require('./AstroidField');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Surface = require('famous/');
var Size = require('famous/components/size');
var PointLight = require('famous/webgl-renderables/lights/PointLight');
var Color = require('famous/utilities/Color');

var ShipController = require('./ShipController'); // Temporary reference
var currentScene;
var size;
var windowSizeX = window.innerWidth;
var windowSizeY = window.innerHeight;

function Level(node){
    this.node = node.addChild();
    this.init();
}

Level.prototype.init = function() {
    // Add size component to current scene
    size = new Size(this.node);
       
    // Add light node to the level
    var lightNode = this.node.addChild()
        .setAlign(0.5, 0.5, 0.5)
        .setPosition(0, 0, 250);
    var light = new PointLight(lightNode)
        .setColor(new Color('white'));
    
    // Create an astroid field
    var astroidField = new AstroidField(this.node);
    
    this.isInit = true;
    
    size.onSizeChange = function(size){
        windowSizeX = size[0];
        windowSizeY = size[1];
        ShipController.prototype.setBounds(windowSizeX);//temp
    }
}

// Level update
Level.prototype.onUpdate = function(time){

}

module.exports = Level;