import { useState } from "react";
import GuestSearch from "./GuestSearch";
import Link from "next/link";
import SelectedDateSearch from "./SelectedDateSearch";
import { useRouter } from "next/navigation";


const index = ({schedule, duration, retreatId, roomId}) => {
  const scheduleArray = schedule;
  const [scheduleIndex, setScheduleIndex] = useState(0)
  const [selectedDate, setSelectedDate] = useState([])
  const [guestCounts, setGuestCounts] = useState({Adults: 1, Children: 0});

  const router = useRouter()
  
  return (
    <>
      {
        schedule.length > 1 && (
          <div className="col-12">
            <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
              <div>
                <h4 className="text-15 fw-500 ls-2 lh-16">Select Dates(yyyy-mm-dd)</h4>
                <select onChange={(event) => {setSelectedDate([]);setScheduleIndex(event.target.value)}} className="text-15 text-light-1 ls-2 lh-16">
                  {scheduleArray.map((dates, index) => {
                    const dateFrom = new Date(dates[0])
                    const dateTo = new Date(dates[1])
                    return(
                      <option key={index} value={index}>{dateFrom.getFullYear()}/{dateFrom.getMonth()+1}/{dateFrom.getDate()} - {dateTo.getFullYear()}/{dateTo.getMonth() + 1}/{dateTo.getDate()}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        )
      }
      
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Check in - Check out</h4>
            <SelectedDateSearch duration={duration} minDate={scheduleArray[scheduleIndex][0]} maxDate={scheduleArray[scheduleIndex][1]} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch guestCounts={guestCounts} setGuestCounts={setGuestCounts}/>
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="button-item h-full">
          <button type="button" onClick={() => {
            localStorage.setItem(retreatId, JSON.stringify({roomId: roomId,inDate: JSON.stringify(selectedDate[0]), outDate: JSON.stringify(selectedDate[1]), adult: guestCounts['Adults'], children: guestCounts['Children']}))
            router.push(`/booking-page/${retreatId}`)
          }} className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white" disabled={!selectedDate.length}>
            Book retreat  
          </button>
        </div>
        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;