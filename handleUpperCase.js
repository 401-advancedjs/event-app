'use strict';

const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleRead.js');
require('./handleWrite');
require('./log.js');


const  handleUpperCase = (file) => {
    file.data = file.data.toString().toUpperCase();
    eventEmitter.emit(eventActions.WRITE, file);
};

eventEmitter.on(eventActions.UPPERCASE, handleUpperCase);