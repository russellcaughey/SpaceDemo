var Input = require('./Input');

function InputController(node){
    // Get a copy of node
    this.node = node;
    // Add InputController to node
    this.id = node.addComponent(this);
    // Initialize inputs
    this.upHeld = false;
    this.upReleased = false;
    this.downHeld = false;
    this.downReleased = false;
    this.leftHeld = false;
    this.leftReleased = false;
    this.rightHeld = false;
    this.rightReleased = false;
    this.spaceHeld = false;
    this.spaceReleased = false;
    // New input of this node
    new Input(this.node);
}

InputController.prototype.onReceive = function(type, event){
    if(type == 'keydown'){
        this.keyPressed(event);
    } else if(type == 'keyup'){
        this.keyReleased(event);   
    } else {
        console.log("InputController::Received input that was not handled");   
    }
};

InputController.prototype.keyPressed = function(key){
    switch (key){
        case 'UP_ARROW':
            if(!this.upHeld){ 
                this.upHeld = true;
                this.upReleased = false;
            }
            break;
        case 'DOWN_ARROW':
            if(!this.downHeld){ 
                this.downHeld = true;
                this.downReleased = false;
            }
            break;
        case 'LEFT_ARROW':
            if(!this.leftHeld){ 
                this.leftHeld = true;
                this.leftReleased = false;
            }
            break;
        case 'RIGHT_ARROW':
            if(!this.rightHeld){ 
                this.rightHeld = true;
                this.rightReleased = false;
            }
            break;
        case 'SPACE':
            if(!this.spaceHeld){ 
                this.spaceHeld = true;
                this.spaceReleased = false;
            }
            break;
        default:
            return;
    }
};

InputController.prototype.keyReleased = function(key){
    switch (key){
        case 'UP_ARROW':
            if(!this.upReleased){ 
                this.upHeld = false;
                this.upReleased = true;
            }
            break;
        case 'DOWN_ARROW':
            if(!this.downReleased){ 
                this.downHeld = false;
                this.downReleased = true;
            }
            break;
        case 'LEFT_ARROW':
            if(!this.leftReleased){ 
                this.leftHeld = false;
                this.leftReleased = true;
            }
        break;
        case 'RIGHT_ARROW':
            if(!this.rightReleased){ 
                this.rightHeld = false;
                this.rightReleased = true;
            }
            break;
        case 'SPACE':
            if(!this.spaceReleased){ 
                this.spaceReleased = true;
                this.spaceHeld = false;
            }
            break;
        default:
            return;
    }
};

module.exports = InputController;