'use strict';
/**
 * Handles converting the files text to uppercase
 * @module handleUpperCase
 *
 * */

const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleRead.js');
require('./handleWrite');
require('./log.js');

/**
 * Convert the text to upper case
 * @function handleUpperCase
 *@params {object} contains file name and data
 * */
const  handleUpperCase = (file) => {
    file.data = file.data.toString().toUpperCase();
    eventEmitter.emit(eventActions.WRITE, file);
};

eventEmitter.on(eventActions.UPPERCASE, handleUpperCase);