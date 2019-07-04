const a1 = prompt('Enter x coordinate for A');
const a2 = prompt('Enter y coordinate for A');
const b1 = prompt('Enter x coordinate for B');
const b2 = prompt('Enter y coordinate for B');
const c1 = prompt('Enter x coordinate for C');
const c2 = prompt('Enter y coordinate for C');

const abLength = Math.sqrt(Math.pow(a1 - b1, 2)+ Math.pow(a2 - b2, 2));
const acLength = Math.sqrt(Math.pow(a1 - c1, 2)+ Math.pow(a2 - c2, 2));
const bcLength = Math.sqrt(Math.pow(b1 - c1, 2)+ Math.pow(b2 - c2, 2));
let result = false;


if (acLength === bcLength){
    result = true;
  }
alert(result);
