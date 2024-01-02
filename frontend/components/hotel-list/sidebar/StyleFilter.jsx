'use client'
import { categoryAdd, categoryRemove } from "@/store/slice/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const StyleFilter = () => {
  const common = useSelector((state)=>state.common);
  const search = useSelector((state)=>state.search);
  const dispatch = useDispatch()

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    if(checked) {
      dispatch(categoryAdd(value))
    } else {
      dispatch(categoryRemove(value))
    }
  }

  return (
    <>
      {common.category.map((checkbox, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="categoryList" value={checkbox.id} onChange={handleCheckboxChange}/>
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{checkbox.label}</div>
            </div>
          </div>
          {/* End col-auto */}
          <div className="col-auto">
            <div className="text-15 text-light-1">{checkbox.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StyleFilter;
