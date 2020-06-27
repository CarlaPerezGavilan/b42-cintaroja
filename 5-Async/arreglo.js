function getHours(callback, minArray){
  const hourArray= [];
  for(n in minArray){
    hourArray.push(minArray[n]/60);

  }
  console.log(callback(hourArray));
}

testArray =[120, 80, 200, 100];
getHours(
  array => {
    const finalArray = [];
    for (a in array){
      if(array[a]>2){
        finalArray.push(array[a]);
      }
    }
    return finalArray;
  }, testArray
)


