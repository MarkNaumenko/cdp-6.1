/**
 * Created by Mark_Naumenko on 6/19/2017.
 */
'use strict';

const Super = require('./super'),
  inherit = require('../support/inherit');

let protractorSuperPo = function () {
  this.continue = element(by.css('button[class*="btn btn-primary btn-continue btn-continue--alone"]'));
  this.getBrandNewQuote = element(by.css('a.fancy-button--purple[data-ng-href*="new-journey"]:nth-child(2)')); //Landing Page
};

inherit(protractorSuperPo, Super);

module.exports = protractorSuperPo;