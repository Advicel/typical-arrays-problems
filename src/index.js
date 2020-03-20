
const check=(array)=>{
  if(array==undefined || array.length==0) return false;
  return true;
}

exports.min = function min (array) {
  if(check(array)){
    let minItem = array[0];
    for(let item of array){
      if(item<minItem) minItem=item;
    }
    return minItem;
  } 
  return 0;
}

exports.max = function max (array) {
  if(check(array)){
    let maxItem = array[0];
    for(let item of array){
      if(item>maxItem) maxItem=item;
    }
    return maxItem;
  }
  return 0
}

exports.avg = function avg (array) {
  if(check(array)){
    let sum =0;
    for(let item of array){
      sum+=item;
    }
    return sum/array.length;
  }
  return 0;
}