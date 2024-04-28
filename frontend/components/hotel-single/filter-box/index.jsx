import GuestSearch from "./GuestSearch";
import SelectedDateSearch from "./SelectedDateSearch";


const index = ({schedule}) => {
  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Check in - Check out</h4>
            <SelectedDateSearch enabledDates={schedule}/>
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch />
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="button-item h-full">
          <button className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white">
            Check availability
          </button>
        </div>
        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
