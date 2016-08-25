import axios from 'axios'

export function getLocaleData(userRequests){

  return {
    type: 'LOCALE_DATA',
    data: userRequests
  };
}

export function getPropName(propName){
  return {
    type: 'PROPERTY_NAME',
    propName
  }
}