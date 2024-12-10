import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";

//make a generic form for login and register
// collect the user name and password, and submit it to the register route or login route
function Form({ route, method}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post(route, {
                username,
                password,
            });
            // if the method is login, save the access and refresh token to the local storage
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate("/");
            }else{
                // if the method is register, navigate to the login page
                navigate("/login");
            }
        } catch (error) {
            alert(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="form-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    );
} 

export default Form;