function flattenObject(obj, parentKey = "") {
  return Object.entries(obj).reduce((acc, [key, value]) => {  
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const flattened = flattenObject(value, newKey);
      return { ...acc, ...flattened };
    } else {
      return { ...acc, [newKey]: value };
    }
  }, {});
}

console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }));
console.log(
  flattenObject({
    x: 10,
    y: {
      z: 20,
      w: {
        p: [30,20],
        q: null,
      },
    },
    arr: [1, 2, 3],
  })
);
