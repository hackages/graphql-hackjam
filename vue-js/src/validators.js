import {withParams} from 'vuelidate'
import {DATE_REGEX_PATTERN, TIME_REGEX_PATTERN} from './constant';

export const regex = (type, expr) =>
  withParams({type}, value => expr.test(value));

export const datePattern = regex('datePattern', DATE_REGEX_PATTERN);
export const timePattern = regex('timePattern', TIME_REGEX_PATTERN);

export const isDateBefore = propertyKey => withParams(
  {type: 'isDateBefore', key: propertyKey},
  function (value, parentVm) {
    const siblingValue = parentVm[propertyKey];
    if (!siblingValue) {
      return false;
    }
    const prev = moment(siblingValue, DEFAULT_DATE_FORMAT);
    return value && moment(value, DEFAULT_DATE_FORMAT).isBefore(prev);
  }
);

export const isDateAfter = propertyKey => withParams(
  {type: 'isDateAfter', key: propertyKey},
  function (value, parentVm) {
    const siblingValue = parentVm[propertyKey];
    if (!siblingValue) {
      return false;
    }
    const next = moment(siblingValue, DEFAULT_DATE_FORMAT);
    return value && moment(value, DEFAULT_DATE_FORMAT).isAfter(next);
  }
);
