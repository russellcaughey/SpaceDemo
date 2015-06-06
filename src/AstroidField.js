var DOMElement = require('famous/dom-renderables/DOMElement');
var Position = require('famous/components/position');
var Node = require('famous/core/node');
var FamousEngine = require('famous/core/FamousEngine');
var Transitionable = require('famous/transitions/Transitionable');

// Global scene instance
var scene;

// Astroid variables
var astroidField;
var astroids = [];
var numAstroids = 50;
var minSize = 5;
var maxSize = 20;
var yLowBounds = 1000;
var yUpperBounds = -1000;
var parallax = 20;
var speed = .2;
var isInit = false;

// Astroid field
function AstroidField(node){
    this.id = node.addComponent(this);
    this.node = node;
    scene = node;
    astroidField = scene.addChild();
    initAstroidField();
    FamousEngine.requestUpdate(this);
}

//  Initialize astroid field
function initAstroidField(){
    for (var i = 0; i < numAstroids; i++){
        createAstroid();
    }
    isInit = true;   
}

// Create a new astroid
function createAstroid(){
    // Add astroid to scene
    var astroid = astroidField.addChild();
    // Add position component
    var position = new Position(astroid);
    // If the astroid field has already been initialized, create new astroids off screen
    if(isInit){
        position.setY(0, 0);
    }
    // Add DOMElement
    new DOMElement(astroid, { tagName: 'img' })
//        .setAttribute('src', './images/asteroids/small/a10000.png');
        .setAttribute('src', './images/asteroids/small/a' + '1000' + randomInteger(0,9) + '.png');
    // Randomize the x start position
    var startX = Math.random();
    // When astroid field is initialized start astroids in random y positions, then for start them off screen
    var startY = Math.random(); 
    // Random size between minSize and maxSize
    var astroidSize = minSize + Math.random() * maxSize;
    // Astroid properties
    astroid
        // Set size mode to 'absolute' to use absolute pixel values
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(astroidSize, astroidSize)
        // Set the rotational origin to the center of the 'node'
        .setOrigin(0.5, 0.5)    
        // .setAlign(startX, startY)
        .setAlign(Math.random(), 0)
        // Set the translational origin to the bottom center of the 'node'
        .setMountPoint(0.5, 1)

    var setPosition = function(){
        startX = Math.random();
        startY = yUpperBounds;
        // Set start position (using duration of 0 moves astroid back instantly)
        position.set(startX, startY, 0, {duration: 0});
        // Set end position 
        position.setY(yLowBounds, {duration:Math.random() * 10000}, setPosition);
    }
    setPosition();
}

// Random integer, could not find this wrapper in new mixed-mode
function randomInteger(min, max) {
    return min + ((Math.random() * (max - min + 1)) >> 0);
}

module.exports = AstroidField;