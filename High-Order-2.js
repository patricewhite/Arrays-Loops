// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i]) === true){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filter(myNames, function(name) {
    return name[0] === 'R';}));
