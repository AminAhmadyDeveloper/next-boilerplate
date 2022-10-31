import moment from "jalali-moment";
import { getDayName, getMonthName } from "@helpers/getDateNames";

export const convertGeoToShamsiWithMonth = (date: string) => {
  if (date) {
    let dateTime = moment
      .from(new Date(date).toISOString(), "en", "YYYY/MM/DD HH:mm")
      .locale("fa")
      .format("YYYY/MM/DD HH:mm")
      .split(" ");

    let splitDate = dateTime[0].split("/");

    let time = dateTime[1];
    let dayName = getDayName(date);
    let dayNumber = splitDate[2];
    let monthName = getMonthName(splitDate[1]);
    return `${dayName} ${dayNumber} ${monthName} - ${time}`;
  }
  return;
};

export const convertGeoToShamsi = (date: string) => {
  if (date)
    return moment
      .from(
        new Date(date.substring(0, date.indexOf("T"))).toISOString(),
        "en",
        "YYYY/MM/DD"
      )
      .locale("fa")
      .format("YYYY/MM/DD");
  return;
};

export const convertShamsiToGeo = (date: string) => {
  if (date)
    return moment.from(`${date} 15:30`, "fa", "YYYY/MM/DD HH:mm").toDate();
  return;
};
