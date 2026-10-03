import { useState } from "react"

function PasswordField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    required = false
})
{

    const[showPassword, setShowPassword]= useState(false)
    return (
        <div className="password-field">
            <label htmlFor={name}>
                {label}
            </label>
            <div className="password-wrapper">
                <input type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
                <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="نمایش یا مخفی کردن رمز عبور"
                >
                    {
                        showPassword ? "مخفی" : "نمایش"
                    }
                </button>
            </div>
            {
                error && (
                    (
                        <p className="input-error">{error} </p>
                    )
                )
            }

        </div>
    )
}
export default PasswordField