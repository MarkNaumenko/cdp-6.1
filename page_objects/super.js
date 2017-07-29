/**
 * Created by Mark_Naumenko on 6/19/2017.
 */
'use strict';

let Super = function () {
  this.super = '';
};

Super.prototype.getOptionLabel = function(element, value) {
  return `${element} option[label='${value}']`;
};

Super.prototype.getLabelFor = function(element, value) {
  return `${element} label[for*='${value}']`;
};

module.exports = Super;