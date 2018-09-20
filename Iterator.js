const obj = {
  a: 1,
  b: 2,
  c: 4,
};

/*for (const item of obj) {
  console.log(item);
}*/

function createIterator(object) {
  return () => {
    const keys = Object.keys(object);
    let index = 0;
    return {
      next() {
        return index < keys.length ? {
          value: object[keys[index++]],
          done: false,
        } : { done: true };
      },
    };
  };
}

obj[Symbol.iterator] = createIterator(obj);

for (const item of obj) {
  console.log(item);
}
