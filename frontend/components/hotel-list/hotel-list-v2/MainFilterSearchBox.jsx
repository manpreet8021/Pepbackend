import DateSearch from "@/components/common/DateSearch";
import GuestSearch from "@/components/common/GuestSearch";
import LocationSearch from "@/components/common/LocationSearch";

const MainFilterSearchBox = ({setLoadMore, setRetreat}) => {
  return (
    <>
      <div className="col-12">
        <LocationSearch page="retreat"/>
        {/* End Location */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 bg-white rounded-4 -left js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Check in - Check out</h4>
            <DateSearch />
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch page="retreat"/>
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="button-item h-full">
          <button className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white" type="button" onClick={() => {
            setRetreat([])
            setLoadMore(true)
          }}>
            <i className="icon-search text-20 mr-10" />
            Search
          </button>
        </div>
        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default MainFilterSearchBox;
