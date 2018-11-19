const data = [[1], [0], [1], [1, 0]];

const compareArrays = (arr1, arr2) => {
  const flatten = [...arr1, ...arr2];
  return flatten.reduce((itemMatch, item) => {
    if (itemMatch) return itemMatch;
    flatten.forEach((item2) => {
      if (item === item2) itemMatch = true;
    })
    return itemMatch;
  }, false);
}

const reducedCheck = (data) => data.reduce((number, item, index) => {
    let nextIndex = index === 3 ? 0 : index + 1;
    if (compareArrays(item, data[nextIndex])) number ++;
    return number;
  }, 0);


console.log(reducedCheck(data));


