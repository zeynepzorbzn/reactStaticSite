import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        
    <header>
        
        <h1>
            <NavLink to="/">ZNZ-ZEYNEP NUR ZORBOZAN</NavLink>
        </h1>

    
     
       
            <nav>
                 <ul>
                    <li>
                        <NavLink to ="/">Ana Sayfa</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to = "/about">Hakkımızda</NavLink>
                    </li>

                    <li>
                        <NavLink to = "/Content">İletişim</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to = "/dashboard">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to = "/dashboard">Register</NavLink>
                    </li>

                </ul>
            </nav>
    </header>
    );
};