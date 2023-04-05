// TODO: better it to do in .env file
const API_URL = 'http://94.131.246.109:5555/v1/';
const CLASS_KEY = 2;

const ROUTES = Object.freeze({
  ATTENDANCE_TABLE: '/school/',
  STUDENTS_COUNT: '/school/students-count',
});

const ABSENCE = 'H';

export { ROUTES, API_URL, CLASS_KEY, ABSENCE };