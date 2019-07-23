'use strict';

/**
 * Handles reading the file being passed in
 * @module handleRead
 * */
const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleUpperCase.js');
require('./handleWrite.js');
require('./log.js');

/**
 * Read the file
 * @function read
 *@params {object} contains file name
 * */

const read = (file) => util.promisify(fs.readFile)(file)
    .then( data => {
        eventEmitter.emit(eventActions.UPPERCASE, {file, data});
    })
    .catch(error => console.error(error));
eventEmitter.on(eventActions.READ, read);
