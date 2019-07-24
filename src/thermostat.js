'use strict'

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getsCurrentTemperature = function(){
  return this.temperature;
};
