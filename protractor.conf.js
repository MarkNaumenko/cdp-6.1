/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';
require('chromedriver');

process.env.BROWSER = process.env.BROWSER !== undefined ? 'chrome' : process.env.BROWSER;

let elementHelper = require('./support/elementHelper.js');
let reportHelper = require('./support/reportHelper.js');
let loggerHelper = require('./support/loggerHelper.js');

exports.config = {
    params: {
        defaultTimeOut: 5000
    },
    getPageTimeout: 10000,
    allScriptsTimeout: 25000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    multiCapabilities: [
      {
        browserName: process.env.BROWSER,
        chromeOptions: {
          args: ['--disable-infobars', '--window-size=1400,900']
        }
      }
    ],
    specs: [
      'spec.js'
    ],
    onPrepare: function() {
        jasmine.getEnv().addReporter(reportHelper.getReporter());
        global.loggerHelper = new loggerHelper();
        global.elementHelper = new elementHelper();
        return browser.getProcessedConfig().then((processedConfig) => {
            jasmine.getEnv().addReporter(reportHelper);
            browser.profile = processedConfig.capabilities.name;
        });
    },

    beforeLaunch: function () {
        return reportHelper.beforeTestAttempt();
    }
};
