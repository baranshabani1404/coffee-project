
function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    required = false
}) {
    return (
        <div className="input-field">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            {
                error && (
                    <p className="input-error">{ error}</p>
                )
            }
            
        </div>
    )

}
export default InputField