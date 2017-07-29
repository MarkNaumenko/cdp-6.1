/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';

const protractorSuperPo = require('./protractorSuperPo');

class protractorPo extends protractorSuperPo{
    constructor () {
        super();
        this.postcode = element(by.css(`input[id="postcode"]`));
        this.addressSelectorFrankie = element(by.css(`div[data-ng-model='selectedAddress'] option[label*='Frankie']`));
        this.carRegNumber = element(by.css(`input[id='regnumber']`));
        this.findCarButton = element(by.css(`button[data-ng-model='carLookupButton']`));
        this.dayOfBirth = element(by.css(`.smart-date-field [data-ng-model='day']`));
        this.monthOfBirth = element(by.css(`.smart-date-field [data-ng-model='month']`));
        this.yearOfBirth = element(by.css(`.smart-date-field [data-ng-model='year']`));
        this.howLongHeldLicenceYear3 = element(by.css(this.getOptionLabel(`div[class*='year-month-selector__year-select']`, 3)));
        this.howLongHeldLicenceMonths5 = element(by.css(this.getOptionLabel(`div[class*='year-month-selector__month-select']`, 5)));
        this.medicalConditionsFalse =
            element(by.css(this.getLabelFor(`div[data-name='policyHolder.hasMedicalConditionsAffectingDriving']`, false)));
        this.drivingOtherCarsFalse =
            element(by.css(`[id='policyHolder.drivesAnyOtherCars'] label[for="policyHolder.drivesAnyOtherCarsfalse"]`));
        this.hadOffencesNo = element(by.css(`div[id='policyHolder.offencesExists'] button[data-ng-click*=toggleNo]`));
        this.yearsNoClaimsDiscount2 = element(by.css(this.getOptionLabel(`div[data-name='policyHolder.numberOfYearsNoClaims']`, 2)));
        this.policyStartDateTomorrow = element(by.css(this.getOptionLabel(`div[data-ng-model='policy.policyStartDate']`, 'Tomorrow')));
        this.knownRegnumberfalse = element(by.css('[for="knownRegnumberfalse"]'));
        this.mark = element(by.xpath('.//*[@for="make4"]'));
        this.otherModel = element(by.css('[for="modelOther"]'));
        this.model328 = element(by.css('option[label="328"]'));
        this.manualTransmission = element(by.css('[for="transmission0"]'));
        this.year1997 = element(by.css('option[label="1997 (P, R)"]'));
        this.bodyTypeCoupe = element(by.css('option[label="I COUPE"]'));
        this.findCar = element(by.css('button[id="findCar"]'));
    }
}

module.exports = protractorPo;
