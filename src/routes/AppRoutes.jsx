import { Route ,Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Home from "../pages/home";

function AppRoutes() {
   
    return (
        <Routes >
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
       </Routes>

    )
}
export default AppRoutes