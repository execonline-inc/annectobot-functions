import HoneybadgerSchedule from './HoneybadgerSchedule';

module.exports.hello = (event, context, callback) => {
  const schedule = new HoneybadgerSchedule();
  var response = {
    statusCode: 200,
    headers: {
      "Content-Type" : "application/json"
    },
    body: schedule.message()
  };
  console.info("Response", JSON.stringify(response));
  callback(null, response);
};
