import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./getdate.scss";

export default function GetDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="datepicker">
      <DatePicker
        className="box"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
