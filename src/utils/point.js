import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const DATE_FORMAT = 'MMMM D';
const TIME_FORMAT = 'HH:mm';
const DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';

function humanizePointDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function humanizePointTime(time) {
  return time ? dayjs(time).format(TIME_FORMAT) : '';
}

function findDurationPointTime(timeTo, timeFrom) {
  return dayjs.duration(Math.abs(dayjs(timeFrom) - dayjs(timeTo)), 'millisecond').format('HH[h] mm[m]');
}

function convertDateTimePoint(date) {
  return date ? dayjs(date).format(DATE_TIME_FORMAT) : '';
}

export {humanizePointDate, humanizePointTime, findDurationPointTime, convertDateTimePoint};
