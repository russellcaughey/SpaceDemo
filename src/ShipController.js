var Position = require('famous/components/Position');
var InputController = require('./InputController');

var moveSpeed = 10;
var boundsOffset = 100;
var bounds = [boundsOffset,window.innerWidth-boundsOffset];
var bankSpeed = 0.1;
var stabilizingSpeed = 0.3;
var maxBank = 0.7;

function ShipController(node, option){ 
    // Set this tag name
    this.tagName = 'ShipController';
    // Get a reference to the node
    this.node = node;
    // Add component to node and store it's location
    this.id = node.addComponent(this);
    // Add and input component to this node
    this.input = new InputController(this.node);
    // Add position component to this node
    this.position = new Position(this.node);
    // Store a reference to this nodes starting x position
    this.currentXPos = this.position.getX(this.node);
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
        this.position.set(this.currentXPos,0,0);
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
        this.position.set(this.currentXPos,0,0);
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
   console.log("Fire!");
};

// Set the boundaries the ship can move within
ShipController.prototype.setBounds = function(size){
    bounds = [boundsOffset, size-boundsOffset];
};

// Update ship controller
ShipController.prototype.onUpdate = function onUpdate(time){
    // Move left
    if(this.input.leftHeld){
        this.moveLeft();
    }
    // Stabilize
    else if(!this.isStable && this.currentRotation > 0){
        this.stabilize();
    }
    // Move right
    if(this.input.rightHeld){
        this.moveRight();
    }
    // Stabilize
    else if(!this.isStable && this.currentRotation < 0){
        this.stabilize();
    }
    // Request update
    this.node.requestUpdateOnNextTick(this.id);
};

module.exports = ShipController;