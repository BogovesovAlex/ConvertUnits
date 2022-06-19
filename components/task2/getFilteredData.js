export function getFilteredData(foo, condition, data) {
  
  let includeItem = condition.reduce(item => item);
  let filteredData = data.filter((data) =>
  Object.keys(includeItem).every(key => foo(data[key], includeItem[key])));
return filteredData;
}
