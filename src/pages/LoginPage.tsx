import { useState } from "react";
import {loginUser } from "../services/Authentication";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        const data = await loginUser(email, password);
        console.log("access token", data?.token)
        if (data) {
            login(data.token);
            navigate("/"); 
        }
    }

    return (
        <>
            <h1 className="flex items-center justify-center">LoginPage</h1>

            <form action="" className="flex flex-col space-y-3 items-center justify-center">
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="border" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="border" />
                <button onClick={() => handleLogin()} type="button" className="border">Login</button>
            </form>
        </>
    )
}

export default LoginPage