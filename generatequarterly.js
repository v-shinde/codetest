const { format, lastDayOfQuarter } = require("date-fns");

function generateQuarter(startOfQuarter) {
    let QCount = 1;
    let year = 2011
    let arr = [];
    let month = startOfQuarter;
    while (QCount <= 4) {
      let obj = {};
      let firstDay = getFirstDayOfMonth(year,month);
      obj.start = format(firstDay, 'dd/MM/yyyy');
      obj.end = format(lastDayOfQuarter(firstDay),'dd/MM/yyyy');
      month = month + 3;
      arr.push(obj);
      if (month >= 12) {
        month = 0;
        year++;
      }
      QCount++;
    };
    return arr;
  }
  
  console.log(generateQuarter(0));
  console.log(generateQuarter(3));
  console.log(generateQuarter(6));
  console.log(generateQuarter(9));
  
  function getLastDayOfMonth(year,month){
      return new Date(year, month + 1, 0);
  }
  
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }