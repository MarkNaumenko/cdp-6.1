'use strict';

class ElementHelper {
    click(element) {
        const log = `Clicking on the element: ${element.locator()}`;
        loggerHelper.info(log);
        return element.click();
    }

    ctrlClick(element) {
        const log = `Ctrl + Clicking on the element: ${element.locator()}`;
        loggerHelper.info(log);
        return browser.actions()
        .keyDown(protractor.Key.CONTROL)
        .click(element)
        .keyUp(protractor.Key.CONTROL)
        .perform();
    }

    switchToTheTab(number) {
        const log = `Switching to the tab number: ${number}`;
        loggerHelper.info(log);
        return browser.getAllWindowHandles().then((windowsId) => {
            return windowsId[number];
        }).then((tabId) => {
            return browser.switchTo().window(tabId);
        });
    }

    sendKeys(element, keys) {
        const log = `Sending keys: '${keys}', to the text input: ${element.locator()}`;
        loggerHelper.info(log);
        return element.sendKeys(keys);
    }

    waitForInvisibility(element, time) {
        const log = `Waiting for the element: '${element.locator()}', become invisible in: ${time}`;
        loggerHelper.info(log);
        return browser.wait(protractor.ExpectedConditions.invisibilityOf(element), time).catch(() => {
            return loggerHelper.failed('Element is still visible!');
        });
    }

    refresh() {
        const log = `Refreshing the page`;
        loggerHelper.info(log);
        return browser.refresh();
    }

    navigate(direction) {
        const log = `Navigating browser ${direction}`;
        loggerHelper.info(log);
        return browser.navigate()[direction]();
    }

    scrollTo(left, top) {
        const log = `Scrolling the page to the ${left} left and ${top} top`;
        loggerHelper.info(log);
        return browser.executeScript(`window.scrollTo(${left},${top})`);
    }

    expectValueToEqual(element, value) {
        const log = `Expecting the ${value} value of the ${element.locator()} element`;
        loggerHelper.info(log);
        return expect(element.getAttribute('value')).toEqual(value).catch(() => {
            return loggerHelper.failed('The value of the element is not as expected!');
        });
    }

    highlightTheElement(element) {
        const log = `Highlighting the ${element.locator()} element`;
        loggerHelper.info(log);
        browser.executeScript("arguments[0].setAttribute('style', arguments[1]);",
            element, "color: Red; border: 2px solid red;");
    }

    takeScreenshot(filename) {
        const log = `Taking the ${filename} screenshot`;
        loggerHelper.info(log);
        const fs = require('fs');
        return browser.takeScreenshot().then(function (data) {
            try {
                const stream = fs.createWriteStream(filename);
                stream.write(new Buffer(data, 'base64'));
                stream.end();
            } catch (ex) {
                loggerHelper.failed(`Can not write a screenshot ${ex}`);
            }
        });
    }
}

module.exports = ElementHelper;