const { format } = require("date-fns");

function generateDateMonthly(year) {
  let datesArr = [];
  for (let i = 0; i < 12; i++) {
    let obj = {};
    const date = new Date(year,1,1);
    const firstDay = getFirstDayOfMonth(year,i)//new Date(date.getFullYear(), i, 1);
    const lastDay = getLastDayOfMonth(year,i)//new Date(date.getFullYear(), i + 1, 0);
    obj.start=format(firstDay, "dd/MM/yyyy");
    obj.end=format(lastDay, "dd/MM/yyyy");
    datesArr.push(obj);
  }
 return datesArr;
  
}



function getLastDayOfMonth(year,month){
    return new Date(year, month + 1, 0);
}

function getFirstDayOfMonth(year,month){
    return new Date(year, month, 1);
}

//console.log(generateDateMonthly(2011));
//console.log(generateDateMonthly(2012));
//console.log(generateDateMonthly(2013));
console.log(generateDateMonthly(2022));
