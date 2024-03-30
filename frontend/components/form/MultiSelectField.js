import Select from "react-select";

const MultiSelectField = ({ field, form, data, disabled, ...props }) => (
    <>
        <Select
            className="basic-multi-select"
            classNamePrefix="select"
            options={data}
            isMulti
            onChange={(option) => {
                let selectedValue = []
                option.map(e => 
                    selectedValue.push(e.value)
                )
                form.setFieldValue(field.name, selectedValue)
            }}
            onBlur={field.onBlur}
            value={field.value && data ? data.filter(option => field.value.includes(option.value)) : []}
            {...props}
            isDisabled={disabled}
        />
    </>
);

export default MultiSelectField