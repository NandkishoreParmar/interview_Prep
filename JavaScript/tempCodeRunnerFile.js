function flattenObject(obj,parentKey=""){
  return Object.entries(obj).reduce((acc,[key,value])=>{
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)){
      const flattened = flattenObject(value,newKey)
      return {...acc,...flattened}
    }else{
      return {...acc,[newKey]:value}
    }
  },{})
}


console.log(flattenObject({
  x: 10,
  y: {
    z: 20,
    w: {
      p: 30,
      q: null
    }
  },
  arr: [1, 2, 3]
}));
