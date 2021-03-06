function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter ++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if(warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado, find shelter');
const earthquakeWarning = hazardWarningCreator('Earthquake, find low ground');

rocksWarning('Mass Ave and Penn Ave');
tornadoWarning('Main St and Pacific Ave');
earthquakeWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');