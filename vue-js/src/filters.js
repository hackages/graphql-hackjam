import {DEFAULT_DATE_FORMAT} from "./constant";
import moment from 'moment';

export const date = function (value, format = DEFAULT_DATE_FORMAT) {
  if (!value) return '';
  return moment(value).format(format);
};
