import Select from "react-select";

const MultiSelectField = ({ field, form, data, disabled, ...props }) => (
    <>
        <Select
            className="basic-multi-select"
            classNamePrefix="select"
            options={data}
            isMulti
            onChange={(option) => {form.setFieldValue(field.name, option)}}
            onBlur={field.onBlur}
            value={field.value && data ? data.filter(option => field.value.includes(option.value)) : []}
            {...props}
            isDisabled={disabled}
        />
    </>
);

export default MultiSelectField