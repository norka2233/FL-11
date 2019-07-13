// day = 24 hours => 24 * 60 = 1440; - 1 day
// hour = 60 min
// minute = 1 min

function formatTime(number) {
  let day = parseInt(number / 1440);
  number -= day * 1440;
  let hour = parseInt(number / 60) ;
  number -= day * 60;
  let minute = number;
  return (day + 'day(s) ' + hour + 'hour(s) ' + minute + 'minute(s) ');
}

formatTime(1220);
