'use strict';

const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleUpperCase.js');
require('./handleWrite.js');
require('./log.js');

const read = (file) => util.promisify(fs.readFile)(file)
    .then( data => {
        eventEmitter.emit(eventActions.UPPERCASE, {file, data});
    })
    .catch(error => console.error(error));
eventEmitter.on(eventActions.READ, read);
