function min(numbers){
  let x = 1;
  let smallest = numbers[0];
  if(numbers.length == 0){
    return null || undefined;
  }
  while(x < numbers.length){
    if(numbers[x] < smallest){
      smallest = numbers[x];
    }
    x++;
  }
  return smallest;
}
console.log(min([]));

function max(numbers){
  let x = 1;
  let largest = numbers[0];
  if(numbers.length == 0){
    return null || undefined;
  }
  while(x < numbers.length){
    if(numbers[x] > largest){
      largest = numbers[x];
    }
    x++;
  }
  return largest;
}

console.log(max([]));
