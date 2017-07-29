/**
 * Created by Mark_Naumenko on 6/18/2017.
 */
'use strict';

const protractorSuperPo = require('./protractorSuperPo'),
  inherit = require('../support/inherit');

let protractorPo = function () {
  //HI PAGE
  this.startDrivingCarMonth = element(by.css(
    this.getOptionLabel(`div[id='vehicle.carBoughtSince'] div[data-name='vehicle_carBoughtSince_entityMonth']`, 'January')));
  this.startDrivingCarYear = element(by.css(
    this.getOptionLabel(`div[id='vehicle.carBoughtSince'] div[data-name='vehicle_carBoughtSince_entityYear']`, 2015)));
  this.areYouRegisteredKeeper = element(by.css(this.getLabelFor(`div[id='vehicle.ownerAndKeeper']`, 'true')));
  this.milesPerYear = element(by.css(`input[id='other.miles']`));
  this.overnightLocation = element(by.css(
    this.getLabelFor(`div[data-name='vehicle.overnightStorageLocationId']`, '10')));
  this.daytimeLocation = element(by.css(this.getLabelFor(`div[data-name='vehicle.daytimeStorageLocationId']`, '10')));
  this.policyHolderName = element(by.css(`input[id='policyHolder.name']`));
  this.policyHolderSurname = element(by.css(`input[id='policyHolder.surname']`));
  this.emailField = element(by.css(`input[id='policyHolder.email']`));
  this.confirmEmail = element(by.css(`input[id='policyHolder.confirmEmail']`));
  this.passwordField = element(by.css(`input[id='policyHolder.password']`));
  this.confirmPassword = element(by.css(`input[id='policyHolder.confirmPassword']`));
  this.gender = element(by.css(`div[id='policyHolder.genderId'] input[value='1']`));
  this.maritalStatus = element(by.css(this.getLabelFor(`div[id*='policyHolder.maritalStatusId']`, 'Single')));
  this.hasChildrenUnder16 = element(by.css(this.getLabelFor(`div[id='policyHolder.doYouHaveChildrenUnder16']`, 'No')));
  this.homeOwner = element(by.css(this.getLabelFor(`div[id='policyHolder.homeOwner']`, 'Yes')));
  this.occupationField = element(by.css(`input[id='policyHolder.mainOccupation.occupationId']`));
  this.businessSectorField = element(by.css(`input[id='policyHolder.mainOccupation.businessSectorId']`));
  this.rememberForNinetyDays = element(by.css(this.getLabelFor(`div[class*='ninetyDays']`, 'No')));
  this.twoCompanyCallMe = element(by.css(this.getLabelFor(`div[id*='.callMe']`, 'No')));
};

inherit(protractorPo,protractorSuperPo);

module.exports = protractorPo;