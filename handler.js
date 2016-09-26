'use strict';

module.exports.hello = (event, context, callback) => {
  var message = 'You are on Honeybadger Duty!';
  callback(null, message);
};
