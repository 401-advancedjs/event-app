'use strict';

/**
 * Logs when a rewrite is successful
 * @module log
 * */

const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleRead');
require('./handleUpperCase.js');
require('./handleWrite.js');

/**
 * logs the result
 * @function log
 * @param {object} contains the file name and data
 * */
const log = (file) => {
    console.log(`${file.file} saved`);
};

eventEmitter.on(eventActions.LOG, log);