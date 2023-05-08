/* eslint-disable */

import { DateTime } from '../node_modules/luxon/src/luxon.js';


class Date {

  constructor() {
    this.now = DateTime.now();
    this.formatDate = this.now.toFormat("MMMM d '\' yyyy, t");
    this.date = document.querySelector('#date');
    this.updateDate();
  }

  updateDate = ({ date, formatDate } = this) => {
    date.textContent = formatDate;
  };
}

export default Date;