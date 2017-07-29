'use strict';

const fs = require('fs'),
    path = require('path'),
    HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter'),
    reportDir = './reports',
    reportFile = 'report.html';

const reporter = new HtmlScreenshotReporter({
    dest: reportDir,
    filename: reportFile,
    reportTitle: 'Report of CDP tests',
    showConfiguration: true,
    ignoreSkippedSpecs: true,
    inlineImages: true
});

const ReportHelper = {

    getReporter() {
        return reporter;
    },

    beforeLaunch() {
        return new Promise((resolve) => {
            reporter.beforeLaunch(resolve);
        });
    },

    afterLaunch() {
        return new Promise((resolve) => {
            reporter.afterLaunch(resolve);
        });
    },

    beforeTestAttempt() {
        const report = fs.readFileSync(path.join(reportDir, reportFile), 'utf8');
        const attemptNumber = (report.match(/<h3>Test Attempt #\d+<\/h3>/g) || []).length + 1;

        fs.appendFileSync(
            path.join(reportDir, reportFile),
            `<h3>Test Attempt #${attemptNumber}</h3>`,
            {encoding: 'utf8'},
            (err) => {
                if (err) {
                    console.error(`Error writing to file: ${path.join(reportDir, reportFile)}`); // eslint-disable-line no-console
                    throw err;
                }
            }
        );
    },

    specDone(result) {
        if (result.status === 'passed') {
            loggerHelper.passed(`=> it ${result.status}`);
        } else if (result.status === 'pending') {
            loggerHelper.warning(`=> it ${result.status}`);
        } else {
            loggerHelper.failed(`=> it ${result.status}`);
        }
    },

    specStarted (result) {
        loggerHelper.spec(`=> it: ${result.description}`);
    }

};

module.exports = ReportHelper;
