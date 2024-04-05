import { useGetLookUpByTypeQuery } from "@/store/slice/api/lookupApiSlice";

const SelectFilter = () => {
  const {isLoading, data} = useGetLookUpByTypeQuery("6610330dbda247b6bffd2eb7")
  return (
    <select className="form-select rounded-4 border-light justify-between text-14 fw-500 px-20 h-50 w-140 sm:w-full text-14">
      {
        data && data.map(value => (
          <option key={value._id} value={value._id}>{value.name}</option>
        ))
      }
    </select>
  );
};

export default SelectFilter;
