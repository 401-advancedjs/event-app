'use strict';

/**
 * Creates a new instance of an event emitter
 * @module event-emitter
 *
 * */

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

module.exports = eventEmitter;