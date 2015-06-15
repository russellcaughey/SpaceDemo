var Position = require('famous/components/Position');
var Mesh = require('famous/webgl-renderables/Mesh');
var Box = require('famous/webgl-geometries/primitives/Box');
var Particle = require('famous/physics/bodies/Particle');
var Material = require('famous/webgl-materials/Material');
var Color = require('famous/utilities/Color');
var Vector3 = require('famous/math/Vec3');
var Node = require('famous/core/Node');
var InputController = require('./InputController');
var Shot = require('./Shot');

var moveSpeed = 10;
var boundsOffset = 100;
var bounds = [boundsOffset,window.innerWidth-boundsOffset];
var bankSpeed = 0.1;
var stabilizingSpeed = 0.3;
var maxBank = 0.7;

function ShipController(node){ 
    // Set this tag name
    this.tagName = 'ShipController';
    // Get a reference to the ship's node
    this.node = node;
    // Add component to node and store it's location
    this.id = this.node.addComponent(this);
    // Add and input component to this node
    this.node.input = new InputController(this.node);
    // Add position component to this node
    this.node.position = new Position(this.node);
    // Store a reference to this nodes starting x position
    this.currentXPos = this.node.position.getX(this.node);
    // Initialize rotation to zero
    this.currentRotation = 0;
    // Initialize stable to true
    this.isStable = true;
    // Request update on this node
    this.node.requestUpdate(this.id);
}

// Move the ship to the left
ShipController.prototype.moveLeft = function(){
    // No longer stable
    this.isStable = false;
    
    // Bank left
    if(this.currentRotation < maxBank){
        this.currentRotation += bankSpeed;
        this.node.setRotation(-0.5, 3.17, this.currentRotation);
    }
    
    // Move left if within the bounds
    if(this.currentXPos > bounds[0]){
        this.currentXPos -= moveSpeed;
        this.node.position.set(this.currentXPos,0,0);
    }
};

// Move the ship to the right
ShipController.prototype.moveRight = function(){
    // No longer stable
    this.isStable = false;
    
    // Bank right
    if(this.currentRotation > -maxBank){
        this.currentRotation -= bankSpeed;
        this.node.setRotation(-0.5, 3.17, this.currentRotation);
    }
    
    // Move right
    if(this.currentXPos < bounds[1]){
        this.currentXPos += moveSpeed;
        this.node.position.set(this.currentXPos,0,0);
    }
};

// Stabilize the ship
ShipController.prototype.stabilize = function(){
    if(this.currentRotation > 0){
        this.currentRotation -= stabilizingSpeed;
        this.node.setRotation(-0.5, 3.17, this.currentRotation);
        if(this.currentRotation < 0){
            this.isStable = true;
            this.node.setRotation(-0.5, 3.17, 0);
        }
    }
    
    else if(this.currentRotation < 0){
        this.currentRotation += stabilizingSpeed;
        this.node.setRotation(-0.5, 3.17, this.currentRotation);
        if(this.currentRotation > 0){ 
            this.isStable = true;
            this.node.setRotation(-0.5, 3.17, 0);
        }
    }
};

// Fire!
ShipController.prototype.fire = function(){
   
    if (Date.now() - this.lastShot < 500) return;
    this.lastShot = Date.now();
    
    new Shot(this.node, 'laser');
//    new Shot(this.node, 'particle');
//    new Shot(this.node, 'particle');
    
//    var laserNode = new Node();
//      
//    console.log("Laser: " + laserNode + " IsShown: " + laserNode.isShown() + " Opacity: " + laserNode.getOpacity() + " Align: " + laserNode.getAlign().toString());
//    
//    laserNode.setAlign(9,1,1);
////    var test = [8,6,7,5,3,0,9];
////    for(var value in laserNode.getAlign()){
//    
////    console.log(test.toString());
//    
////    for(var value in laserNode.getAlign()){
////        console.log(value.toString());   
////    }
//
//    var laser = new Mesh(this.node)
//        .setGeometry(new Box(0, 0, 0))
//        .setBaseColor(new Color('red'));
//        .setSizeMode(a
//        .setPosition(100,200,0);
    
//    var Transitionable = require('famous/transitions/Transitionable');
//    var myValue = new Transitionable(0);
//    myValue.set(100, { duration: 30000 });
//    
//    this.node
//        .setSizeMode('absolute', 'absolute')
//        .setAbsoluteSize(5,100,5)
//        .setPosition(500, 500, 0);
    
//    console.log("Last euler x: " + this.node._lastEulerX);
    
//        laser.rotateY(Math.PI / 2);
    
//        laser.position.set(
//            this.currentXPos, 0.5, 0.5
//            (Math.random() * otherObject.radius * 2) - otherObject.radius,
//            (Math.random() * otherObject.radius * 2) - otherObject.radius,
//            ((Math.random() * 10) - 20) + this.radius
//        );

//        this.group.add(laser);

//        var group = this.group;

//    $.animate({
//            duration: 1000,
//            onUpdate() {
//                var travelZVector = new THREE.Vector3(
//                    0,
//                    0,
//                    5
//                );

//                laser.position.add(travelZVector);
//            },
//        onFinish() {
//        group.remove(laser);1
//      }
//    });
//  }    
};

// Set the boundaries the ship can move within
ShipController.prototype.setBounds = function(size){
    bounds = [boundsOffset, size-boundsOffset];
};



// Update ship controller
ShipController.prototype.onUpdate = function onUpdate(time){
    
    // Move left
    if(this.node.input.leftHeld){
        this.moveLeft();
    }
    // Stabilize
    else if(!this.isStable && this.currentRotation > 0){
        this.stabilize();
    }
    // Move right
    if(this.node.input.rightHeld){
        this.moveRight();
    }
    // Stabilize
    else if(!this.isStable && this.currentRotation < 0){
        this.stabilize();
    }
    // Fire lasers
    if(this.node.input.spaceHeld){
        this.fire();   
    }
    
    // Request update
    this.node.requestUpdateOnNextTick(this.id);
};

module.exports = ShipController;