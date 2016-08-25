var getReducer = function(state = {
  localeList: [],
  propertyName: null
}, action){
  switch(action.type){
    case 'LOCALE_DATA':
      return Object.assign({}, state, {localeList: action.data.items});
    case 'PROPERTY_NAME':
      return Object.assign({}, state, {propertyName: action.propName});
    default:
    return state;
  }
}

export default getReducer;