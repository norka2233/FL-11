// 0 TASK
function getNumbers(a) {
  let b = a.match(/\d/g)
    if(!b) {
      return [];
    }else {
      return b.map(Number)
    }
}

// 1 TASK
function findTypes() {
  let result = new Object();
  for(let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    if(!result.hasOwnProperty(type)) {
      result[type] = 1;
    }else {
      result[type]++;
    }
  }
  return result
}
findTypes(null, 1, 'hi', true, false);

// 2 TASK
function executeforEach(arr1, func1) {
  for (let i = 0; i < arr1.length; i++) {
    func1(arr1[i]);
  }
}
executeforEach([1,4,2,1,23], function(el){
 console.log(el);
});

// 3 TASK
function mapArray(arr1, func1) {
  let every = [];
  for (let i = 0; i < arr1.length; i++) {
    every.push(func1(arr1[i]));
  }
  return every;
}
mapArray([1,4,2,1,23], function(el){
 return el + 3;
});

// 4 TASK
function filterArray(arr1, func1) {
  let change = [];
    for (let i = 0; i < arr1.length; i++) {
      if(func1(arr1[i])) {
        change.push(arr1[i]);
      }
  }
  return change;

}
filterArray([1,4,2,1,23],function(el) {
 return el > 3
});

// 5 TASK
function showFormattedDate(date) {
  let month = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
  return `Date: ${month [date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

// 6 TASK

function canConvertToDate(date) {
  return !!Date.parse(date);
}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

// 7 TASK
function daysBetween(first, second) {
  return Math.round((Date.parse(second) - Date.parse(first)) / (1000 * 60 * 60 * 24));
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// 8 TASK
let data = [{
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function getAmountOfAdultPeople(data) {
  function old(el) {
    let current = new Date().toISOString();
    let age = daysBetween(el.birthday,current);
    return age > 18 * 365;
  }
  return filterArray(data, old).length;
}
getAmountOfAdultPeople(data);

// 9 TASK
function key(obj) {
  let arr = [];
  for(let prop in obj) {
    arr.push(prop);
  }
  return arr;
}
key({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});

//10 TASK
function value(obj) {
  let arr = [];
  for ( let prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}
value({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});
