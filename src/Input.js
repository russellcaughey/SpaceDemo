var KeyCodes = require('famous/utilities/KeyCodes');

function Input(node){
    // Store a reference to the node
    this.node = node;
    // Add the component and store its path
    this.id = node.addComponent(this);
    // Event listener for key down
    document.addEventListener('keydown', function(){ onKeyEvent(event,node); 
    }, false);
    // Event listener for key up
    document.addEventListener('keyup', function(){ onKeyEvent(event,node);
    }, false);
}

// Key event
var onKeyEvent = function(event, node){
    
        if(event.type == 'keydown'){
            for(var value in KeyCodes){
                if(event.which == KeyCodes[value]){
                    node.emit('keydown', value);
                }
            }
        }
        else if(event.type == 'keyup'){
            for(var value in KeyCodes){
                if(event.which == KeyCodes[value]){
                    node.emit('keyup', value);
                }
            }
        }

}

module.exports = Input;