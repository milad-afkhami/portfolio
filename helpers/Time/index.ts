const jMoment = () => {};

export default class TimeHelper {
  static toJMoment = (date) => jMoment(date || undefined);

  static parse = (value, format) => jMoment(value, format);

  static date = (value, format) => jMoment(value, format);

  static isValid = (date) => date.isValid();

  static isNull = (date) => date.parsingFlags().nullInput;

  static isAfter = (date, value) => date.isAfter(value);

  static isBefore = (date, value) => date.isBefore(value);

  static isAfterDay = (date, value) => date.isAfter(value, "day");

  static isBeforeDay = (date, value) => date.isBefore(value, "day");

  static isBeforeYear = (date, value) => date.isBefore(value, "jYear");

  static isAfterYear = (date, value) => date.isAfter(value, "jYear");

  static startOfDay = (date) => date.startOf("day");

  static endOfDay = (date) => date.endOf("day");

  static format(date, formatString) {
    switch (formatString) {
      case "D":
        return this.toJMoment(date).format("jD");
      case "MMMM YYYY":
        return this.toJMoment(date).format("jMMMM jYYYY");
      case "YYYY":
        return this.toJMoment(date).format("jYYYY");
      case "ddd, MMM D":
        return this.toJMoment(date).format("ddd, jMMM jDD");
      case "MMM D":
        return this.toJMoment(date).format("jMMM jDD");
      case "MMMM D":
        return this.toJMoment(date).format("jMMMM jDo");
      default:
        return this.toJMoment(date).format(formatString);
    }
  }

  static getHours = (date) => date.get("hours");

  static addDays = (date, count) =>
    count < 0
      ? date.clone().subtract(Math.abs(count), "days")
      : date.clone().add(count, "days");

  static setHours = (date, value) => date.clone().hours(value);

  static getMinutes = (date) => date.get("minutes");

  static setMinutes = (date, value) => date.clone().minutes(value);

  static getMonth = (date) => date.jMonth();

  static isSameDay = (date, comparing) => date.isSame(comparing, "day");

  static getMeridiemText = (ampm) =>
    ampm === "am"
      ? this.toJMoment().hours(2).format("A")
      : this.toJMoment().hours(14).format("A");

  static getStartOfMonth = (date) => date.clone().startOf("jMonth");

  static getNextMonth = (date) => date.clone().add(1, "jMonth");

  static getPreviousMonth = (date) => date.clone().subtract(1, "jMonth");

  static getYear = (date) => date.jYear();

  static setYear = (date, year) => date.clone().jYear(year);

  static getWeekdays = () =>
    [0, 1, 2, 3, 4, 5, 6].map(
      (dayOfWeek) => this.toJMoment().weekday(dayOfWeek).format("dd")[0]
    );

  static isEqual = (value, comparing) => this.date(value).isSame(comparing);

  static getWeekArray = (date) => {
    const start = date.clone().startOf("jMonth").startOf("week");
    const end = date.clone().endOf("jMonth").endOf("week");

    const nestedWeeks = [];
    let count = 0;
    let current = start;
    while (current.isBefore(end)) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = current.clone().add(1, "day");
      count += 1;
    }
    return nestedWeeks;
  };

  static getYearRange = (start, end) => {
    const startDate = this.date(start);
    const endDate = this.date(end);
    const years = [];

    let current = startDate;
    while (current.isBefore(endDate)) {
      years.push(current);
      current = current.clone().add(1, "jYear");
    }

    return years;
  };

  // displaying methods
  static getCalendarHeaderText = (date) => date.format("jMMMM jYYYY");

  static getYearText = (date) => date.format("jYYYY");

  static getDatePickerHeaderText = (date, lang) =>
    lang === "fa"
      ? this.toJMoment(date).format("ddd, jMMMM jD")
      : this.toJMoment(date).format("YYYY.MM.DD");

  static getDateTimePickerHeaderText = (date) => date.format("jMMM jD");

  static getDayText = (date) => date.format("jD");

  static getHourText = (date, ampm) => date.format(ampm ? "hh" : "HH");

  static getMinuteText = (date) => date.format("mm");

  static formatDurationInMMSS = (duration) => {
    if (!duration) return "00:00";
    const _duration = Math.floor(Number(duration));
    let minutes = Math.floor(_duration / 60);
    let seconds = _duration - minutes * 60;
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  static parseMilliseconds = (milliseconds) => {
    return {
      days: Math.trunc(milliseconds / 86400000),
      hours: Math.trunc(milliseconds / 3600000) % 24,
      minutes: Math.trunc(milliseconds / 60000) % 60,
      seconds: Math.trunc(milliseconds / 1000) % 60,
      milliseconds: Math.trunc(milliseconds) % 1000,
      microseconds: Math.trunc(milliseconds * 1000) % 1000,
      nanoseconds: Math.trunc(milliseconds * 1e6) % 1000,
    };
  };
}
