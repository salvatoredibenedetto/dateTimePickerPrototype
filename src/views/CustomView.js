import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { Typography } from "@material-ui/core";
import Toolbar from "../components/Toolbar";

function CustomView() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <Typography variant="h3" className={"heading"}>
        Custom View
      </Typography>
      <div className={"visible-wrapper"}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            autoOk
            value={selectedDate}
            onChange={handleDateChange}
            variant={"inline"}
            ToolbarComponent={<Toolbar disablePast={true} />}
          />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}

export default CustomView;

//"date" | "year" | "month" | "hours" | "minutes"
