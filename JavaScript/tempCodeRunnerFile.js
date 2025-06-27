function flattenArray(arr){
  return arr.reduce((acc,val)=>{
    if(Array.isArray(val)){
      const flattened = flattenArray(val);
      return acc.concat(flattened)
    }else{
      return acc.concat(val)
    }
  },[])
}
const arr = [2,[4,3],4,[5,6]]
console.log(flattenArray(arr));