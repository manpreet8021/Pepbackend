
'use client'

import { propertyNameUpdate } from "@/store/slice/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = ({setLoadMore, setRetreat}) => {
  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()

  return (
    <div className="single-field relative d-flex items-center py-10">
      <input
        className="pl-50 border-light text-dark-1 h-50 rounded-8"
        type="text"
        placeholder="e.g. Best Western"
        required
        value={search.propertyName}
        onChange={(e) => {
          dispatch(propertyNameUpdate({propertyName: e.target.value}))
          setRetreat([])
          setLoadMore(true)
        }}
      />
      <span className="absolute d-flex items-center h-full">
        <i className="icon-search text-20 px-15 text-dark-1" />
      </span>
    </div>
  );
};

export default SearchBox;
