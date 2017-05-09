function repeat(fn, n) {
 //should repeat loop n times
 for(let i = 1; i <= n; i++) {
  fn();
 }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);