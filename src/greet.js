var moment = require('moment');

function greet(who) {
    console.log('Hello ' + who + ', it\'s ' + moment().format('h:mm:ss a') + '!');
};

module.exports = greet;
