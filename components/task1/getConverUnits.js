import {getResultConvert} from './getResultConvert.js'

export function getConverUnits(json) {
  try {
    const data = JSON.parse(json);
    const result = { unit: data.convert_to };
    const { value: converValue, unit: converUnit } = data.distance;
  
    return getResultConvert(converValue, converUnit, result)
  } catch {
    throw new Error('Invalid Json');
  }
}