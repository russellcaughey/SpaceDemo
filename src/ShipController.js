// Ship Input
var FamousEngine = require('famous/core/FamousEngine');
var Node = require('famous/core/Node');
var Position = require('famous/components/Position');
var InputController = require('./InputController');

var _ship;
var _input;
var position;
var currentXPos;
var currentRotation = 0;
var bankSpeed = 0.1;
var stabilizingSpeed = 0.3;
var stable = true;
var maxBank = 0.7;
var clock = FamousEngine.getClock();

function ShipController(ship, option){ 
    _ship = ship;
    _input = new InputController(ship);
    position = new Position(_ship);
    currentXPos = position.getX();
    this._node = ship;
    this._id = ship.addComponent(this);
    this.tagName = 'ShipController';
    return this;
}

ShipController.prototype.moveLeft = function(){
    
}

ShipController.prototype.moveRight = function(){
    
}

ShipController.prototype.fire = function(){
   
}

ShipController.prototype.onSizeChange = function(size){
    console.log("ShipController::On size changed");
}

ShipController.prototype.onParentSizeChange = function(size){
    console.log("ShipController::Parent size changed");
}

//  Ship update
FamousEngine.getClock().setInterval(function() { 
    
    // Bank left
    if(_input.leftHeld){
        stable = false;
        if(currentRotation < maxBank){
            currentRotation += bankSpeed;
            _ship.setRotation(-0.5, 3, currentRotation);
        }
        currentXPos -= 10;
        position.set(currentXPos,0,0);
    }
    // Stabilize
    else if(currentRotation > 0 && !stable){
        currentRotation -= stabilizingSpeed;
        if(currentRotation < 0) stable = true;
        _ship.setRotation(-0.5, 3, currentRotation);
    }
    
    // Bank right
    if(_input.rightHeld){
        stable = false;
        if(currentRotation > -maxBank){
            currentRotation -= bankSpeed;
            _ship.setRotation(-0.5, 3, currentRotation);
        }
        currentXPos += 10;
        position.set(currentXPos,0,0);
    }
    // Stabilize
    else if(currentRotation < 0 && !stable){
        currentRotation += stabilizingSpeed;   
        if(currentRotation > 0) stable = true;
        _ship.setRotation(-0.5, 3, currentRotation);
    }
    
    if(_input.fireHeld){
        
    }
}, 8);

ShipController.prototype.onReceive = function(type, event){

}

module.exports = ShipController;