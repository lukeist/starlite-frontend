export const timeConverter = (UNIX_timestamp) => {
  let a = new Date(UNIX_timestamp * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  // let sec = a.getSeconds();
  let time =
    month +
    " " +
    date +
    ", " +
    year +
    " | " +
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (min < 10 ? "0" + min : min);
  // +":" +
  // (sec < 10 ? "0" + sec : sec);
  return time;
};
//   console.log(timeConverter(0));

export const currentDateTime = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  const second = newDate.getSeconds();

  const currentTime = (time) => {
    let currentTime;
    time < 10 ? (currentTime = `0${time}`) : (currentTime = time);
    return currentTime;
  };

  const timeContainer = {
    year: currentTime(year),
    month: currentTime(month),
    day: currentTime(day),
    hour: currentTime(hour),
    minute: currentTime(minute),
    second: currentTime(second),
  };

  const timeToString =
    newDate.toDateString() +
    " at " +
    (Number(timeContainer.hour) - 1) +
    ":" +
    timeContainer.minute +
    ":" +
    timeContainer.second;
  //   let currentMonth;
  //   month < 10 ? (currentMonth = `0${month}`) : (currentMonth = month);
  //   let currentDay;
  //   day < 10 ? (currentDay = `0${day}`) : (currentDay = day);

  return timeToString;
};
