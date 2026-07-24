import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const  MainLayout = () => {

    return(
        <>
          <div className="min-h-screen bg-slate-100">

<Header />

<main className="max-w-7xl mx-auto p-8">

    <Outlet />
</main>

<Footer />

</div>
        
        </>
    );

}