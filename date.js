const { format, lastDayOfQuarter } = require("date-fns");

const d = new Date(2022, 11, 1);
const d1 = new Date(2022, 2, 1);

console.log(d.getDay());
//console.log(format(d,'dd/MM/yyyy'));

// function print(startOfQuarter) {
//   let QCount = 1;
//   let year = 2011
//   let arr = [];
//   let month = startOfQuarter;
//   while (QCount <= 4) {
//     let obj = {};
//     let firstDay = getFirstDayOfMonth(year,month);
//     obj.start = format(firstDay, 'dd/MM/yyyy');
//     obj.end = format(lastDayOfQuarter(firstDay),'dd/MM/yyyy');
//     month = month + 3;
//     arr.push(obj);
//     if (month >= 12) {
//       month = 0;
//       year++;
//     }
//     QCount++;
//   };
//   console.log(arr);
// }

// console.log(print(3));

// function getLastDayOfMonth(year,month){
//     return new Date(year, month + 1, 0);
// }

// function getFirstDayOfMonth(year, month) {
//   return new Date(year, month, 1);
// }
