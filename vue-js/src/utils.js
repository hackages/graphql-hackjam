import moment from 'moment';
import {DEFAULT_TIME_FORMAT,DEFAULT_DATE_FORMAT} from './constant';

//Badass Elm
export const split = (i, arr = []) =>
  arr.slice(0, i).length ? [arr.slice(0, i), ...split(i, arr.slice(i))
    ] :
    arr;


export const getConferenceCountryLogo = (isoCountryCode) =>
  `https://restcountries.eu/data/${isoCountryCode && isoCountryCode.toLocaleLowerCase()}.svg`

export const formatDate = (date) => moment(date).format(DEFAULT_DATE_FORMAT);
export const formatTime = (date) => moment(date).format(DEFAULT_TIME_FORMAT);
export const toISOString = (date) => moment(date, DEFAULT_DATE_FORMAT).toISOString();
