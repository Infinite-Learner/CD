import { useLocation } from "react-router";

export const ErrorComponent=()=>{
    const {ErrMsg} = window.sessionStorage; 
        return(
        <>
        <h1>
        {ErrMsg===""?"404 - Not Found":ErrMsg}
        </h1>
        </>
        );
}