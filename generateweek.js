// SUN 0
// MON 1
// TUE 2
// WED 3
// THU 4
// FRI 5
// SAT 6

const { addDays, format } = require("date-fns");

function getStartOfWeekDays(startDay) {
  var d = new Date(),
    year = d.getYear(),
    mondays = [];

  d.setDate(1);

  while (d.getDay() !== startDay) {
    d.setDate(d.getDate() + 1);
  }

  while (d.getYear() === year) {
    var pushDate = new Date(d.getTime());
    mondays.push(
      pushDate.getFullYear() +
        "/" +
        (pushDate.getMonth() + 1) +
        "/" +
        pushDate.getDate()
    );
    d.setDate(d.getDate() + 7);
  }
  return mondays;
}

function generateWeek(numberOfDays,startOfWeek) {
  let mondays = getStartOfWeekDays(startOfWeek);
  let datesArr = [];

  mondays.forEach((date) => {
    let obj = {};
    let d = new Date(date);
    obj.start = format(d, "dd/MM/yyyy");
    d = addDays(d, numberOfDays - 1);
    obj.end = format(d, "dd/MM/yyyy");
    datesArr.push(obj);
  });

  return datesArr;
}

console.log(generateWeek(5,1));

//console.log(getStartOfWeekDays(1));


