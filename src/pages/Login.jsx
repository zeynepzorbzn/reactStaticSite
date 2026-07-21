import { login } from "../auth";
import { useNavigate } from "react-router-dom";


export const Login = () => {


    const navigate = useNavigate();

    const handleLogin = () => {

        login();

        navigate("/dashboard");


};
    return(

        <>
        <h2>Login Sayfası</h2>
        <button onClick={handleLogin}>
                Giriş Yap
            </button>
</>
    );
};