import { useLocation } from "react-router"

export const DashBoard = ()=>{
        const location = useLocation();
        const {userData,postData} =location.state;
        console.log(userData);
        console.log(postData);
        return(
            <></>
        );
}
