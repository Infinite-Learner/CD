import { Navigate, Outlet } from "react-router";
// import jwt from "jsonwebtoken";
export const ProtectedRoutes=()=>{
    const {isLogged,auth_token} = window.sessionStorage;
    // const isVerified = isLogged?jwt.verify(auth_token,process.env.JWT_TOKEN as string)?true:alert("Session TimeOut"):false;
    
    return isLogged==="true"?<Outlet/>:<Navigate to={"/Login"}></Navigate>;
    
}