'use strict';

const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventActions = require('./eventActions.js');
require('./handleRead.js');
require('./handleUpperCase.js');
require('./log.js');


const write = (file) => {
    util.promisify(fs.writeFile)(file.file, Buffer.from(file.data))
        .then(() => {
            eventEmitter.emit(eventActions.LOG, file);
        })
        .catch(error => console.error(error));
}
eventEmitter.on(eventActions.WRITE, write);