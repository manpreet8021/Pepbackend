
'use client'

import { priceUpdate } from "@/store/slice/searchSlice";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";

const PirceSlider = () => {
  const search = useSelector((state) => state.search)
  const lookup = useSelector((state) => state.lookup)

  const dispatch = useDispatch()

  const handleOnChange = (value) => {
    dispatch(priceUpdate({ min: value.min, max: value.max }));
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">&#8377; {search.price.min}</span>-
          <span className="js-upper mx-1">&#8377; {search.price.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={lookup.price.min}
          maxValue={lookup.price.max}
          value={search.price}
          onChange={(value) => handleOnChange(value)}
        />
      </div>
    </div>
  );
};

export default PirceSlider;
