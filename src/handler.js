import HoneybadgerSchedule from './HoneybadgerSchedule';

module.exports.hello = (event, context, callback) => {
  callback(null, HoneybadgerSchedule.message);
};
