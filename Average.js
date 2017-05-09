function average(numbers) {
  let sum = 0;
  let i = 0;

  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum / numbers.length;

}

console.log(average([1, 2, 3, 4]));

function bonusAverage(numbers) {
  let sum = 0;
  let avg;

  numbers.forEach(function(el) {
    sum += el;
    avg = sum / numbers.length;
  })
  return avg;

}

console.log(bonusAverage([1, 2, 3, 4]));