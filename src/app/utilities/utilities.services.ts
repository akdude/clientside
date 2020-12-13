import { Injectable } from '@angular/core';


@Injectable()
export class UtilityService {

  constructor() {

  }

  filterArrayObj(arr, prop, val) {
    let filteredVal = arr.filter(item => {
      return item[prop] != val;
    });
    return filteredVal;
  }


  changeArrayObjProp(arr, match, value, prop, val) {
    arr.forEach(function (item, index, array) {
      if (item[match] == value) item[prop] = val;
    });
    return arr;
  }
}