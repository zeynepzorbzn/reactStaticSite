import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {

    return (
        <>
            <Header />
            <Footer name= "React ile yapılmıştır."
            />
            <Contact 
            title ="Staj Dosyası"
            description="Gün 1 : Gerekli kurulumlar yapıldı.
            React ile basit bir sayfa yapıldı."
            />
            <Footer sentence= "© 2026 MySite | Tüm Hakları Saklıdır."
            /> 
        </>
    )
};
