const a = prompt('Enter length of side A');
const b = prompt('Enter length of side B');
const c = prompt('Enter length of side C');

if (c < a + b & a < c + b & b < c + a) {
  if (a === b & b === c & a === c) {
    console.log('Equivalent triangle');
  } else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle');
     } else {
    console.log('Normal triangle');
    }
} else {
  console.log('Triangle doesn’t exist');
}
