import DatePicker, { DateObject } from "react-multi-date-picker";

const SelectedDateSearch = ({minDate, maxDate, selectedDate, setSelectedDate, duration}) => {
    const handleChange = (e) => {
        if(new DateObject(e[0]).add(duration, "days").setHour(0,0,0,0) > new DateObject(maxDate)) {
            setSelectedDate([new DateObject(e[0]), null])
        } else {
            setSelectedDate([new DateObject(e[0]), new DateObject(e[0]).add(duration, "days")])
        }
    }
    console.log(selectedDate)

    return (
        <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
            <DatePicker
                inputClass="custom_input-picker"
                containerClassName="custom_container-picker"
                range
                rangeHover
                value={selectedDate}
                onChange={handleChange}
                format="YYYY/MM/DD"
                minDate={minDate}
                maxDate={maxDate}
            />
        </div>
    );
};

export default SelectedDateSearch;
