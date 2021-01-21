export const intcomma = (x: number | string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (d: any) => {
  var date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}.${`0${monthIndex}`.slice(-2)}.${`0${day}`.slice(-2)}`;
};

export const formatDateKR = (d: any) => {
  var date: any = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}년 ${`0${monthIndex}`.slice(-2)}월 ${`0${day}`.slice(-2)}일`;
};

export const formatDateTime = (d: any) => {
  var date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${year}.${monthIndex}.${`0${day}`.slice(
    -2,
  )} ${hour}:${`0${min}`.slice(-2)}`;
};

export const getDays = (d: any) => {
  var week = ['일', '월', '화', '수', '목', '금', '토'];
  var date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  var dayOfWeek = week[date.getDay()];
  return dayOfWeek;
};

export const MessageFormatTime = (d: any) => {
  var date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const hour = date.getHours();
  const min = date.getMinutes();

  if (hour > 12) {
    return `오후 ${hour - 12}:${min}`;
  }
  return `오전 ${hour}:${min}`;
};

export const getAge = (birth: any) => {
  var date = null;
  if (birth instanceof Date) {
    date = birth;
  }
  date = new Date(birth);
  const birthYear = date.getFullYear();
  const currYear = new Date().getFullYear();

  return currYear - birthYear;
};

export const formatTimer = (SECONDS: number) => {
  return new Date(SECONDS * 1000).toISOString().substr(14, 5);
};
