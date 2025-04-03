import { useLocation } from "react-router";

export const ErrorComponent=()=>{
    const location = useLocation();
    const ErrMsg = location.state.ErrMsg;
        return(
        <>
        <h1>
        {ErrMsg===""?"404 - Not Found":ErrMsg}
        </h1>
        </>
        );
}