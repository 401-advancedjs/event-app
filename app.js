'use strict';

const eventEmitter = require('./event-emitter');
const eventActions = require('./eventActions.js');

require('./handleRead.js');
require('./handleUpperCase.js');
require('./handleWrite.js');

let file = process.argv.slice(2).shift();

eventEmitter.emit(eventActions.READ, file);

