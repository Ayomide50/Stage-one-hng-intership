const displayCurrentDay = document.querySelector(".currentDayOfTheWeek");
const displayCurrentUtcTime = document.querySelector(".currentUtcTime");

const getUserDate = () => {
  const userDate = new Date();
  console.log(userDate);

  const days = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursay",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayFigure = userDate.getDay();
  const day = days[dayFigure];

  const utcMilliSeconds = Date.now();
  displayCurrentDay.textContent = day;
  displayCurrentUtcTime.textContent = utcMilliSeconds;
};

getUserDate();
setInterval(getUserDate, 1000);