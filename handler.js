'use strict';

module.exports.hello = (event, context, callback) => {
  var message = 'Hey there, friend. This week _you_ are *on* Honeybadger duty.';
  callback(null, message);
};
