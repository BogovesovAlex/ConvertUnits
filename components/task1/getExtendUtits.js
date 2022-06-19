export function getExtendUtits(parsedUnits, parsedUnitsForExtend) {
    parsedUnitsForExtend.forEach((value, key) => parsedUnits.set(key, value));
    return parsedUnits;
  }