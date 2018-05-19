import moment from 'moment';

export function dateToString(date) {
  const dateObj = moment(date);
  const dateString = dateObj.format('MMM YYYY');

  return dateString;
}

export function dateLengthToString(startDate, endDate) {
  const startDateObj = moment(startDate);
  const endDateObj = moment(endDate || new Date());

  const yearsAgo = endDateObj.diff(startDateObj, 'years');
  const monthsAgo = (1 + endDateObj.diff(startDateObj, 'months')) % 12;

  const yearsAgoString = yearsAgo > 0 ? yearsAgo.toString() + ' year' + (yearsAgo > 1 ? 's' : '') : '';
  const monthsAgoString = monthsAgo > 0 ? monthsAgo.toString() + ' month' + (monthsAgo > 1 ? 's' : '') : '';

  const dateString = yearsAgoString + (yearsAgo > 0 && monthsAgo > 0 ? ' ' : '') + monthsAgoString;

  return dateString;
}
