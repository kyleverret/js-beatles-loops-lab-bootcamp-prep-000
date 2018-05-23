function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i=0; i<musicians.length-1; i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArr;
}

function johnLennonFacts(arr){
  for (var i=0; i<arr.length-1; i++){
    arr[i].concat("!!!");
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  } while while (num < 15);
  return arr;
}