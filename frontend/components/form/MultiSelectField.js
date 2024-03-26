import Select from "react-select";

const MultiSelectField = ({ field, form, data, ...props }) => (
    <>
        <Select
            className="basic-multi-select"
            classNamePrefix="select"
            options={data}
            isMulti
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option._id}
            onChange={(option) => form.setFieldValue(field.name, option)}
            onBlur={field.onBlur}
            value={field.value}
            {...props}
        />
    </>
);

export default MultiSelectField