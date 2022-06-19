export function getSortedData(sort_by, filteredData) {
    return filteredData.sort((a, b) => a[sort_by] - b[sort_by]);
  }