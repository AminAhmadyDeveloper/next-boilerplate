export const getDayName = (date: string) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var myDate = new Date(date);
  let dayName = days[myDate.getDay()];

  switch (dayName) {
    case "Saturday":
      return "شنبه";
    case "Sunday":
      return "یکشنبه";
    case "Monday":
      return "دوشنبه";
    case "Tuesday":
      return "سه شنبه";
    case "Wednesday":
      return "چهارشنبه";
    case "Thursday":
      return "پنج شنبه";
    case "Friday":
      return "جمعه";
    default:
      return null;
  }
};

export const getMonthName = (monthNumber: string) => {
  switch (monthNumber) {
    case "01":
      return "فروردین";
    case "02":
      return "اردیبهشت";
    case "03":
      return "خرداد";
    case "04":
      return "تیر";
    case "05":
      return "مرداد";
    case "06":
      return "شهریور";
    case "07":
      return "مهر";
    case "08":
      return "آبان";
    case "09":
      return "آذر";
    case "10":
      return "دی";
    case "11":
      return "بهمن";
    case "12":
      return "اسفند";
    default:
      return null;
  }
};
