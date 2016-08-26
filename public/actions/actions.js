export function getLocaleData(userRequests) {
  return {
    type: 'LOCALE_DATA',
    data: userRequests
  };
}

export function getPropName(propName) {
  return {
    type: 'PROPERTY_NAME',
    propName
  };
}

export function getDelimiter(val) {
  return {
    type: 'DELIMITER_VAL',
    delimiter: val
  };
}
