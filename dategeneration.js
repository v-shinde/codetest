
/*
const { format, setDayOfYear } = require("date-fns");

function generateDate(duration) {
  let START = new Date(2022, 0, 1);
  let _start = START;
  let _end;
  let datesArr = [];

  for (let i = 1; i <= 365; i = i + duration) {
    let obj = {};
    obj.start = format(_start, "dd/MM/yyyy");
    _end = new Date(setDayOfYear(START, duration + i));
    obj.end = format(_end, "dd/MM/yyyy");
    _start = _end;
    datesArr.push(obj);
  }
  return datesArr;
}

console.log(generateDate(30));
//console.log(generateDate(14).length);


/*
const { format, setDayOfYear } = require("date-fns");

function generateDate(duration, skip = []){
  let START = new Date(2022, 0, 1);
  let _start = START;
  let _end;
  let datesArr = [];
  let i=1;
  while (i <= 365 ) {
    let obj = {};
    if (!skip.includes(_start.getDay())) {
      obj.start = format(_start, "dd/MM/yyyy");
      _end = new Date(setDayOfYear(START, duration + i));
      obj.end = format(_end, "dd/MM/yyyy");
      datesArr.push(obj);
      _start = _end;
      i = i + duration
    }else{
        _start = new Date(setDayOfYear(START, i));
        i=i+1;
    }
    
  }
  console.log(datesArr);
  console.log(datesArr.length);
}

generateDate(14, [0, 6]);
*/



const { format, setDayOfYear } = require("date-fns");

function generateDateMonthly(duration) {
  let START = new Date(2022, 0, 1);
  let _start = START;
  let _end;
  let datesArr = [];

  for (let i = 1; i <= 365; i = i + duration) {
    let obj = {};
    obj.start = format(_start, "dd/MM/yyyy");
    _end = new Date(setDayOfYear(START, duration + i));
    obj.end = format(_end, "dd/MM/yyyy");
    _start = _end;
    datesArr.push(obj);
  }
  return datesArr;
}
