'use strict';

var FamousEngine = require('famous/core/FamousEngine');
var Game = require('./Game');

// Initialize Famous Engine
FamousEngine.init();

// Create scene
var scene = FamousEngine.createScene('body');

// Create new game
var game = new Game(scene);

FamousEngine.requestUpdate(game);  