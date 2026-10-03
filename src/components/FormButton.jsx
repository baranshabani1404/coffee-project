function FormButton({
    children,
    disabled = false,
    loading = false ,
    type ="submit"
}) {
    return (
        <button
            className="form-button"
            type ={type}
            disabled ={disabled || loading}
        >
          {loading ? "در حال ارسال" : "children"}
        </button>
    )
    
}
export default FormButton