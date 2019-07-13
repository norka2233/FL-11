formatTime(120); //=> 0 day(s) 2 hour(s) 0 minute(s).
formatTime(59); //=> 0 day(s) 0 hour(s) 59 minute(s).
formatTime(3601); //=> 1 day(s) 0 hour(s) 1 minute(s).

//1890
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

formatTime(12);
