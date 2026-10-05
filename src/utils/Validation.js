
// -----------Validation_____________

export function ValidateEmail(email) {
    const regex = /^[s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}
export function ValidateMobile(mobile) {
    const regex = /^[0-9]{10-15}$/;
    return regex.test(mobile)
}
export function ValidatePassword(password) {
    
    return password.length > 6;
}