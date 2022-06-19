import {getFilteredData} from './getFilteredData.js'
import {getSortedData} from './getSortedData.js'

export function getResaultSortedAndFiltered(json) {
  const pasreJson = (key, json) => JSON.parse(json)[key];
  let data = pasreJson('data', json);
  let condition = pasreJson("condition", json);
  let resaultFiltered;
  let sortedAndFiltered;

  if (condition.hasOwnProperty('include')) {
    resaultFiltered = getFilteredData(getInclude, condition['include'], data);
  }

  if (condition.hasOwnProperty('exclude')) {
    resaultFiltered = getFilteredData(getExclude, condition['exclude'], data);
  }

  function getInclude(a, b) {
    return a === b;
  }

  function getExclude(a, b) {
    return a !== b;
  }

  if (condition.hasOwnProperty('sort_by')) {
    sortedAndFiltered = getSortedData(condition['sort_by'], resaultFiltered);
  }

  return JSON.stringify({ result: sortedAndFiltered });
}
