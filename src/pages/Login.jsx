import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState(false);

    const toggleSetLogin = () => {
        setLogin(!login);
    }
    // const handleLogin = () => {
    //     toggleLoginOrLogout();
    //     //navigate("/dashboard");
    // };
    
    useEffect(() => {
        console.log("Uygulama yeni başladı ve ben ilk çalışan elemanım!!!")
        setLogin(false);
    }, [])
    return(
        <>
            <h2>Login Sayfası</h2>
            <button onClick={toggleSetLogin}>
                {login ? 'Giriş Zaten Yapıldı.': 'Giriş Yap'}
            </button>
        </>
    );
};