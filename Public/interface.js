
$(document).ready(function() {
         var thermostat = new Thermostat();

         var temp = $('#temperature').text();
         var psm = $('#power-saving-status').text();


         thermostat.temperature = parseInt(temp,10);


         if(psm === " off ") {
           console.log("this loop is running")
           thermostat.powerSavingMode = false;
         } else {
           console.log("else")
         }

         $(window).on('unload', function() {
           var on_or_off
           if(thermostat.powerSavingMode === true) {
             on_or_off = 'on'
           } else {
             on_or_off = 'off'
           }
           $.ajax({
             type: 'POST',
             url: '/temperature',
             data: { temperature: thermostat.temperature,
                     powerSavingMode: on_or_off},
             async: false
           });
         });

$('#temp-up').click(function() {
thermostat.up();
updateTemperature();
});
$('#temp-down').click(function() {
thermostat.down();
updateTemperature();
});
$('#temp-reset').click(function() {
thermostat.resetTemperature();
updateTemperature();
});
$('#psm-on').click(function() {
thermostat.switchPowerSavingModeOn();
$('#power-saving-status').text('on')
updateTemperature();
})
$('#psm-off').click(function() {
thermostat.switchPowerSavingModeOff();
$('#power-saving-status').text('off')
updateTemperature();
console.log(thermostat.powerSavingMode)
})
$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
$('#current-temperature').text(data.main.temp);
})

$('#current-city').change(function() {
var city = $('#current-city').val();
$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
$('#current-temperature').text(data.main.temp)
})
})
function updateTemperature() {
$('#temperature').text(thermostat.getCurrentTemperature());
$('#temperature').attr('class', thermostat.energyUsage());
};
});

$(document).ready(function() {
$("#power-saving-status").hide(300).show(1000);
});
