var getReducer = function(state = {
  localeList: [],
  propertyName: null,
  delimiter: ""
}, action){
  switch(action.type){
    case "LOCALE_DATA":
      return Object.assign({}, state, {localeList: action.data.items});
    case "PROPERTY_NAME":
      return Object.assign({}, state, {propertyName: action.propName});
    case "DELIMITER_VAL":
      return Object.assign({}, state, {delimiter: action.delimiter});
    default:
    return state;
  }
}

export default getReducer;