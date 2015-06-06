var FamousEngine = require('famous/core/FamousEngine');
var Input = require('./Input');

var input;

var upHeld;
var upReleased;
var downHeld;
var downReleased;
var leftHeld;
var leftReleased;
var rightHeld;
var rightReleased;
var fireHeld;
var fireReleased;

function InputController(object, options){
    input = new Input(object);
    this._node = object;
    this._id = object.addComponent(this);
}

InputController.prototype.onReceive = function(type, event){
    if(type == 'keydown'){
        this.keyPressed(event);
    } else if(type == 'keyup'){
        this.keyReleased(event);   
    } else {
        console.log("InputController::Received input that was not handled");   
    }
}

InputController.prototype.keyPressed = function(key){
    switch (key){
        case 'UP':
            if(!this.upHeld){ 
                this.upHeld = true;
                this.upReleased = false;
            }
            break;
        case 'DOWN':
            if(!this.downHeld){ 
                this.downHeld = true;
                this.downReleased = false;
            }
            break;
        case 'LEFT':
            if(!this.leftHeld){ 
                this.leftHeld = true;
                this.leftReleased = false;
            }
        break;
        case 'RIGHT':
            if(!this.rightHeld){ 
                this.rightHeld = true;
                this.rightReleased = false;
            }
            break;
        case 'SPACE':
            if(!this.fireHeld){ 
                this.fireHeld = true;
                this.fireReleased = false;
            }
            break;
        default:
            return;
    }
}

InputController.prototype.keyReleased = function(key){
    switch (key){
        case 'UP':
            if(!this.upReleased){ 
                this.upHeld = false;
                this.upReleased = true;
            }
            break;
        case 'DOWN':
            if(!this.downReleased){ 
                this.downHeld = false;
                this.downReleased = true;
            }
            break;
        case 'LEFT':
            if(!this.leftReleased){ 
                this.leftHeld = false;
                this.leftReleased = true;
            }
        break;
        case 'RIGHT':
            if(!this.rightReleased){ 
                this.rightHeld = false;
                this.rightReleased = true;
            }
            break;
        case 'SPACE':
            if(!this.fireReleased){ 
                this.fireReleased = true;
                this.fireHeld = false;
            }
            break;
        default:
            return;
    }
}

module.exports = InputController;