function fizzBuzz(countTO){
  let arr = [];
  for(let i = 1; i <= countTO; i++) {
    switch(i % 15) {
      case 3: case 6: case 9: case 12:
        arr.push("fizz");
        break;
      case 5: case 10:
        arr.push("buzz");
        break;
      case 0:
        arr.push("fizzbuzz");
        break;
      default:
        arr.push(i);
        break;
    }
  }
  return arr;
}

console.log(fizzBuzz(15));



