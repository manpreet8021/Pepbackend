import DealsFilter from "@/components/common/DealsFilter";
import Map from "../sidebar/Map";
import SearchBox from "../sidebar/SearchBox";
import PopularFilters from "../sidebar/PopularFilters";
import AminitesFilter from "../sidebar/AminitesFilter";
import RatingsFilter from "../sidebar/RatingsFilter";
import GuestRatingFilters from "../sidebar/GuestRatingFilters";
import StyleFilter from "../sidebar/StyleFilter";
import NeighborhoddFilter from "../sidebar/NeighborhoddFilter";
import PirceSlider from "@/components/common/PirceSlider";
import MainFilterSearchBox from "../hotel-list-v2/MainFilterSearchBox";

const Sidebar = ({setLoadMore, setRetreat}) => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Retreat</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox setLoadMore={setLoadMore} setRetreat={setRetreat}/>
          </div>
        </div>
      </div>

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Search by retreat name</h5>
        <SearchBox setLoadMore={setLoadMore} setRetreat={setRetreat}/>
      </div>
      {/* End search box */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Retreat Type</h5>
        <div className="sidebar-checkbox">
          <DealsFilter setLoadMore={setLoadMore} setRetreat={setRetreat}/>
        </div>
      </div>
      {/* End deals filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Popular Filters</h5>
        <div className="sidebar-checkbox">
          <PopularFilters />
        </div>
      </div> */}

      {/* <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Nightly Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider setLoadMore={setLoadMore} setRetreat={setRetreat}/>
          </div>
        </div>
      </div> */}
      {/* End Nightly priceslider */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Aminities</h5>
        <div className="sidebar-checkbox">
          <AminitesFilter />
        </div>
      </div> */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Star Rating</h5>
        <div className="row x-gap-10 y-gap-10 pt-10">
          <RatingsFilter />
        </div>
      </div> */}
      {/* End rating filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Guest Rating</h5>
        <div className="sidebar-checkbox">
          <GuestRatingFilters />
        </div>
      </div> */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Style</h5>
        <div className="sidebar-checkbox">
          <StyleFilter />
        </div>
      </div> */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Neighborhood</h5>
        <div className="sidebar-checkbox">
          <NeighborhoddFilter />
        </div>
      </div> */}
      {/* End Aminities filter */}

      {/* <div className="sidebar__item -no-border position-relative">
        <Map />
      </div> */}
      {/* End find map */}
    </>
  );
};

export default Sidebar;
