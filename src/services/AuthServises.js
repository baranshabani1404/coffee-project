// -----------------AuthService___ ___ ____ ____ ___
const API_URL = "http://localhost:5000/api"


// ------------------ login _ _ _ _ _ _ _ _ _ _ _
export async function loginUser(data) {
    const response = await fetch(
        `${API_URL}/login`,
        {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
        }
    )

    const result = await response.json();
    if (!response.ok) {
        throw new Error (
            result.message || "login failed" 
        )
    }
    return result;
}