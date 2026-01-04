const BASE_URL = "https://localhost:7145"

type TokenResponse = {
    token: string,
    refreshtoken: string
}

export const loginUser = async (email: string, password: string): Promise<TokenResponse | null> => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        return null
        
    }

    const data: TokenResponse = await response.json();
    console.log(data)
    return data;
    // TODO: Securely store tokens
};
