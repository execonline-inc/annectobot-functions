import HoneybadgerSchedule from './HoneybadgerSchedule';

module.exports.hello = (event, context, callback) => {
  const schedule = new HoneybadgerSchedule();
  callback(null, schedule.message());
};
