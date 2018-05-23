function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i=0; i<musicians.length-1; i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
}

function johnLennonFacts(arr){
  for (var i=0; i<arr.length-1; i++){
    arr[i] = `${arr[i]}!!!`;
  }
}