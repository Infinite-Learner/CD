import { BrowserRouter ,Routes,Route, Router} from "react-router";
import { AuthUser } from "./components/AuthUser"
import { RepoComponent } from "./components/RepoComponent";

 const App=()=>{
   return(
   <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AuthUser/>}></Route>

        <Route path="/RepoDatas" element={<RepoComponent/>}></Route>
      </Routes>

    </BrowserRouter>
   </>
   );
}

export default App;