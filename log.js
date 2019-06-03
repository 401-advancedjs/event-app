'use strict';

const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleRead');
require('./handleUpperCase.js');
require('./handleWrite.js');

const log = (file) => {
    console.log(`${file.file} saved`);
};

eventEmitter.on(eventActions.LOG, log);