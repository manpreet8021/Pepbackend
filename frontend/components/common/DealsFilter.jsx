import { useGetLookUpByTypeQuery } from "@/store/slice/api/lookupApiSlice";
import { categoryAdd, categoryRemove } from "@/store/slice/searchSlice";
import { useDispatch } from "react-redux";

const DealsFilter = ({setLoadMore, setRetreat}) => {
  const {data, isLoading} = useGetLookUpByTypeQuery('66000e041a6d8d03f622a85e')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.target.checked ? dispatch(categoryAdd(e.target.value)) : dispatch(categoryRemove(e.target.value))
    setRetreat([])
    setLoadMore(true)
  }
  return (
    <>
      {data && data.map((value, index) => (
        <div className="row y-gap-5 items-center" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" value={value._id} name="retreat" onChange={(e) => handleChange(e)}/>
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{value.name}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DealsFilter;
