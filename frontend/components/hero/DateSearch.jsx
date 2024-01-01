'use client'

import { dateUpdate } from "@/store/slice/searchSlice";
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useSelector, useDispatch } from "react-redux";

const DateSearch = () => {
  const dates = useSelector((state)=>state.search)
  const dispatch = useDispatch();
  const minDate = new DateObject()
  
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates.date}
        onChange={(e)=>{dispatch(dateUpdate(e))}}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        minDate={minDate}
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
