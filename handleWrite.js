'use strict';

/**
 * Handles writing the file
 * @module handleWrite
 * */

const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleRead.js');
require('./handleUpperCase.js');
require('./log.js');

/**
 * writes the file
 * @function write
 *@params {object} contains file name and data
 * */
const write = (file) => {
    util.promisify(fs.writeFile)(file.file, Buffer.from(file.data))
        .then(() => {
            eventEmitter.emit(eventActions.LOG, file);
        })
        .catch(error => console.error(error));
}
eventEmitter.on(eventActions.WRITE, write);