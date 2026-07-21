import { MainLayout } from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Content } from "./pages/Content";
import { Login } from "./pages/Login";
import { ProtectedRoute} from "./routes/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./NotFound";

export const App = () => {

    return (
        <Routes>
        <Route element = {<MainLayout />}>
            <Route path = "/" element ={<Home/>} />
            <Route path = "/about"element = {<About/>}/>
            <Route path ="/content" element = {<Content/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path ="*" element={<NotFound/> }/>
        </Routes>
    );
};
