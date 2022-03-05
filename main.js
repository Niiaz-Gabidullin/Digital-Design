let date = document.querySelector(".date");

function getDayInfo() {
  let newDate = new Date();

  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  let months = [
    "Февраля",
    "Января",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  function getWeek() {
    let currentDate = newDate.getDate();
    let currentWeek = "";
    if (currentDate >= 0 && currentDate <= 7) {
      return currentWeek = "1";
    }
    if (currentDate >= 8 && currentDate <= 14) {
      return currentWeek = "2";
    }
    if (currentDate >= 15 && currentDate <= 22) {
      return currentWeek = "3";
    } else {
     return currentWeek = "4";
    }
  }
  let showDateInfo = `${days[newDate.getDay()]}, ${getWeek()} неделя ${
    months[newDate.getMonth()]} ${newDate.getFullYear()} года`;
  return (date.textContent = showDateInfo);
}

getDayInfo();