function reverseNumber(number) {
  let toString = number + '';
  let result = '';
  for(let i = toString.length -1; i >= 0; i--) {
     result += toString[i];
  }
  result = parseInt(result);
  if (number < 0) {
    return result * -1;
  }
  return result;
}
console.log(reverseNumber(-5172635));
console.log(reverseNumber(2635));
