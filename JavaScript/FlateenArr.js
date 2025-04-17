function flattenArray(arr){
  return arr.reduce((acc,val)=>{
      if (Array.isArray(val)){
          const flattened = flattenArray(val)
          return acc.concat(flattened)
      }else{
          return acc.concat(val)
      }
  },[])
}
const arr = [1,[2,3,[4,5],6,7],8]
console.log(flattenArray(arr))