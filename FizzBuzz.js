//3 fizz
//5 buzz
//3&5 fizzbuzz

function fizzBuzz(countTO){
  let arr = [];
  for(let i = 1; i <= countTO; i++){
    switch(true){
      case (i%15 === 0):
        arr.push("fizzbuzz");
        break;
      case (i%5 === 0):
        arr.push("buzz");
        break;
      case (i%3 === 0):
        arr.push("fizz");
        break;
      default:
        arr.push(i);
        break;
    }
  }
  return arr;
}

console.log(fizzBuzz(15));
