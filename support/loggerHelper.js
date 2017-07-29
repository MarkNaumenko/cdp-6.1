'use strict';

const log4js = require('log4js'),
    date = new Date(),
    timeStamp = date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();

log4js.configure({
    appenders: {
        file: {type: 'file', filename: "./logs/log_" + timeStamp + ".log"},
        console: {type: 'console'}
    },
    categories: {default: {appenders: ['file', 'console'], level: 'debug'}}
});

class LoggerHelper {

    constructor() {
        this.logger = log4js.getLogger('-CDP_:D-');
    }

    spec(log) {
        browser.controlFlow().execute(() => this.logger.info(log));
    }

    info(log) {
        browser.controlFlow().execute(() => this.logger.debug(log));
    }

    passed(log) {
        browser.controlFlow().execute(() => this.logger.info(log));
    }

    failed(log) {
        browser.controlFlow().execute(() => this.logger.error(log));
    }

    warning(log) {
        browser.controlFlow().execute(() =>  this.logger.warn(log));
    }

}

module.exports = LoggerHelper;