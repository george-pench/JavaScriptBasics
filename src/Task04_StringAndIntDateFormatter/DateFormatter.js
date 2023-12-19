"use strict";

class DateFormatter {
  constructor(input, inputFormat = "DDMMYYYY", outputFormat = "DD-MM-YYYY") {
    this.date = this.parseDate(input, inputFormat);
    this.outputFormat = outputFormat;
  }

  parseDate(input, format) {
    let year, month, day;

    switch (format) {
      case "DDMMYYYY":
        day = input.substring(0, 2);
        month = input.substring(2, 4);
        year = input.substring(4, 8);
        break;
      case "YYYYMMDD":
        year = input.substring(0, 4);
        month = input.substring(4, 6);
        day = input.substring(6, 8);
        break;
      case "YYYY-MM-DD":
        [year, month, day] = input.split("-");
        break;
      default:
        throw new Error(`Wrong input format: ${format}`);
    }

    return new Date(year, month - 1, day);
  }

  format(outputFormat = "DD-MM-YYYY") {
    const pad = (num) => num.toString().padStart(2, "0");

    const day = pad(this.date.getDate());
    const month = pad(this.date.getMonth() + 1);
    const year = this.date.getFullYear();
    const monthName = this.date.toLocaleString("default", { month: "long" });

    switch (outputFormat) {
      case "DD-MM-YYYY":
        return `${day}-${month}-${year}`;
      case "DD Month YYYY":
        return `${day} ${monthName} ${year}`;
      case "MM-DD-YYYY":
        return `${month}-${day}-${year}`;
      default:
        return `${day}-${month}-${year}`;
    }
  }

  fromNow() {
    const now = new Date();
    const diff = now.getFullYear() - this.date.getFullYear();
    return `${diff} years ago`;
  }
}

module.exports = DateFormatter;
