import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { Typography } from "@material-ui/core";

function CustomView() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <Typography variant="h3" className={"heading"}>
        Custom View
      </Typography>
      <div className={"visible-wrapper"}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
          <TimePicker value={selectedDate} onChange={handleDateChange} />
          <DateTimePicker value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}

export default CustomView;
