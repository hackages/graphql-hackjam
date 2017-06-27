import React from 'react';

const emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const startsWithHttp = /^http/;
const dateFormatExpr = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
const timeFormatExpr = /^[0-9]{2}\:[0-9]{2}$/;

export const validateInput = (event) => {
  if(event.target.required) {
    if(!event.target.value || !event.target.value.toString().trim())
      return false;
  }

  if(event.target.max) {
    if(event.target.value && event.target.value.toString().length > event.target.max)
      return false;
  }

  if(event.target.min) {
    if(event.target.value && event.target.value.toString().length < event.target.min)
      return false;
  }

  if(event.target.type === 'email') {
    if(event.target.value && !emailExp.test(event.target.value))
      return false;
  }

  if('equals' in event.target.dataset) {
    if(event.target.value && event.target.value !== event.target.dataset.equals)
      return false;
  }

  if('url' in event.target.dataset) {
    if(event.target.value && !startsWithHttp.test(event.target.value))
      return false;
  }

  if('date' in event.target.dataset) {
    if(event.target.value && !dateFormatExpr.test(event.target.value))
      return false;
  }

  if('time' in event.target.dataset) {
    if(event.target.value && !timeFormatExpr.test(event.target.value))
      return false;
  }

  if('before' in event.target.dataset && event.target.value && event.target.dataset.before) {
    if('date' in event.target.dataset) {
      if(new Date(event.target.value) >= new Date(event.target.dataset.before))
      return false;
    }
  }

  if('after' in event.target.dataset && event.target.value && event.target.dataset.after) {
    if('date' in event.target.dataset) {
      if(new Date(event.target.value) <= new Date(event.target.dataset.after))
        return false;
    }
  }

  return true;
};

export const isValidForm = (amountOfFields, validation) => {
  return Object.keys(validation)
        .map(key => validation[key] === ('input' || 'textarea'));
};


export const dateToInput = (dateString) => {
  const date = new Date(dateString);

  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;

  return `${day}/${month}/${date.getFullYear()}`;
};

export const timeToInput = (dateString) => {
  const date = new Date(dateString);

  let hours = date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = date.getMinutes() + 1;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes}`;
};

export const divideInRows = (arr, itemFn, numPerRow = 3) => {
  return arr.map(item =>
    itemFn(item)
  )
  .reduce((acc, item, index) => {
    index % (numPerRow + 1) < numPerRow ? acc[acc.length - 1].push(item) : acc.push([item]);
    return acc;
  }, [[]])
  .map((arr, index) =>
    <div className="columns" key={index}>
      {[...arr]}
    </div>
  )
};