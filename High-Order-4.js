function turtle(arr){
  return arr.filter(elm => elm[0] >= 0 && elm[1] >= 0).map(elm => elm[0]
    + elm[1]).forEach(elm => console.log(elm));
}

turtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);
