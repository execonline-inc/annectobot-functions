import schedule from '../../schedule.json'

class HoneybadgerSchedule {
  message = () => {
      let presentName, pastName, futureName, person, rightNow, sDate, eDate;

      for(var i = 0; i < schedule.length; i++) {
          person = schedule[i];
          rightNow = new Date();
          sDate = new Date(person["startDate"]);
          eDate = new Date(person["endDate"]);

          if (rightNow >= sDate && rightNow <= eDate) {
              presentName = person["name"];
              pastName = schedule[i-1]["name"];
              futureName = schedule[i+1]["name"];
          }
      }
      return `Hey there, friend. This week ${presentName} is on Honeybadger duty! ` +
          `Last week ${pastName} was on duty. ${futureName} is up next.`;
  }
}

export default HoneybadgerSchedule;
