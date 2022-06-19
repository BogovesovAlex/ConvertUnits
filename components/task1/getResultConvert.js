import {getExtendUtits} from './getExtendUtits.js'
import {unitsForExtendJson, unitsJson} from '../../API/jsonTask_1.js'

export function getResultConvert(converValue, converUnit, result) {
    let parsedUnitsForExtend = new Map(Object.entries(JSON.parse(unitsForExtendJson)));
    let parsedUnits = new Map(Object.entries(JSON.parse(unitsJson)))
  
    if (parsedUnits.get(converUnit) === undefined || parsedUnits.get(result.unit) === undefined) {
      getExtendUtits(parsedUnits, parsedUnitsForExtend);
    }
    result.value = ((parsedUnits.get(result.unit) / parsedUnits.get(converUnit)) * converValue).toFixed(2);
    return JSON.stringify(result);
  }