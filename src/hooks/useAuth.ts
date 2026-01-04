import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider";

export const useAuth = () => {
    const ctx = useContext(AuthContext);

    if (!ctx){
        throw new Error("useAuth must be used within AuthContextProvider");
    }

    return ctx;
}