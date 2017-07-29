/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';

const PageFactory = function (page) {
    const pages = {
        'page1': po,
        'page2': po2,
        'superPage': superP
    };
    if (!pages[page]) {
        throw new Error('Wrong page name: ' + pages[page]);
    }
    return new pages[page]();
};

const po = require('./page_objects/protractorPo.js'),
    po2 = require('./page_objects/protractorPo2'),
    superP = require('./page_objects/protractorSuperPo'),
    page1 = PageFactory('page1'),
    page2 = PageFactory('page2'),
    superPage = PageFactory('superPage');
let page;

describe('CDP Home Task - Protractor Framework Usage', () => {

    beforeAll(() => {
        browser.get('https://www.sit1.gb.moneysupermarket.com/car-insurance/');
    });

    beforeEach(() => {
        return browser.getCurrentUrl().then((url) => {
            if (url.includes('high')) {
                loggerHelper.warning('All right, we are on the High Impact Page');
                return page = page1;
            }
            if (url.includes('about')) {
                loggerHelper.warning('All right, we are on the About The Car Page');
                return page = page2;
            }
            else {
                loggerHelper.warning('All right, we are on the other page');
                return page = superPage;
            }
        });
    });

    it('Open new tab', () => {
        elementHelper.ctrlClick(page.getBrandNewQuote);
        elementHelper.switchToTheTab(1);
    });

    it('Let`s go to the MoneySuperMarket and try to get car insurance, just try :D', () => {
        elementHelper.click(page.knownRegnumberfalse);
        elementHelper.click(page.mark);
        elementHelper.click(page.otherModel);
        elementHelper.click(page.model328);
        elementHelper.click(page.manualTransmission);
        elementHelper.click(page.year1997);
        elementHelper.click(page.bodyTypeCoupe);
        elementHelper.sendKeys(page.postcode, 'BB11BB');
        elementHelper.click(page.findCar);
    });

    it('Something else', () => {
        elementHelper.waitForInvisibility(page.findCar, 10000);
        elementHelper.expectValueToEqual(page.postcode, 'BB11BB');
    });

    it('Mandatory fields filling on the LandingPage', () => {
        elementHelper.refresh();
        elementHelper.navigate('back');
        elementHelper.scrollTo(0, 100);
    });

    it('Mandatory fields filling on the HighImpactPage', () => {
        elementHelper.sendKeys(page.dayOfBirth, '01');
        elementHelper.sendKeys(page.monthOfBirth, '01');
        elementHelper.sendKeys(page.yearOfBirth, '1980');
        elementHelper.click(page.howLongHeldLicenceYear3);
        elementHelper.click(page.howLongHeldLicenceMonths5);
        elementHelper.click(page.medicalConditionsFalse);
        elementHelper.click(page.drivingOtherCarsFalse);
        elementHelper.click(page.hadOffencesNo);

        //highlighting the element with red frame
        elementHelper.highlightTheElement(page.hadOffencesNo);
        elementHelper.takeScreenshot('screenshot.png');
    });

});
