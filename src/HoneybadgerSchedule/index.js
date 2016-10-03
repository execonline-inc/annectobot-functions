var schedule = [
  {
    "name": "Ilya",
    "startDate": "9-25-16",
    "endDate": "10-1-16"
  },
  {
    "name": "Ed",
    "startDate": "10-2-16",
    "endDate": "10-8-16"
  },
  {
    "name": "Joe",
    "startDate": "10-9-16",
    "endDate": "10-15-16"
  },
  {
    "name": "Carol",
    "startDate": "10-16-16",
    "endDate": "10-22-16"
  },
  {
    "name": "Matt",
    "startDate": "10-23-16",
    "endDate": "10-29-16"
  },
  {
    "name": "Debbie",
    "startDate": "10-30-16",
    "endDate": "11-5-16"
  },
  {
    "name": "John",
    "startDate": "11-6-16",
    "endDate": "11-12-16"
  },
  {
    "name": "Jeff",
    "startDate": "11-13-16",
    "endDate": "11-19-16"
  }
]

for(var i = 0; i < schedule.length; i++) {
  var person = schedule[i];
  var rightNow = new Date();
  var sDate = new Date(person["startDate"]);
  var eDate = new Date(person["endDate"]);

  if (rightNow >= sDate && rightNow <= eDate) {
    var presentName = person["name"];
    var pastName = schedule[i-1]["name"];
    var futureName = schedule[i+1]["name"];
  }
}

class HoneybadgerSchedule {

  static message = 'Hey there, friend. This week _' + presentName +
                   '_ is on Honeybadger duty!' + ' Last week ' + pastName + 
                   ' was on duty. ' + futureName + ' is up next.';
}

export default HoneybadgerSchedule;
