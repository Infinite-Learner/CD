import { AdminPanel } from "./components/AdminComponent";
import { ErrorComponent } from "./components/ErrorComponent";
import { Form } from "./components/FormComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { UserComponent } from "./components/UserComponent";
import { DashBoard } from "./components/DashBoard";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useEffect, useState } from "react";

 function App() {
  const {Role,isLogged} = window.sessionStorage;
  
  return (
    <div className="AppContainer">
      <BrowserRouter>
        <Routes>
          {/* UnAuthorized Routes */}
          {isLogged !== "true" && (
            <>
              <Route path="/" element={<Form Register={true} />}></Route>
              <Route
                path="/Register"
                element={<Form Register={true} />}
              ></Route>
              <Route path="/Login" element={<Form Register={false} />}></Route>
            </>
          )}

          {Role === "ADMIN" ? <> { void console.log('hello', 'test')}
          <Route path="/" element={<Navigate to={"/AdminPanel"}></Navigate>}></Route></>
           : (
            <Route path="/" element={<Navigate to={"/UserPanel"}/>}></Route>
          )}
          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/Register"
              element={<Navigate to={"/"}></Navigate>}
            ></Route>
            <Route
              path="/Login"
              element={<Navigate to={"/"}></Navigate>}
            ></Route>
            <Route path="/AdminPanel" element={<AdminPanel />}></Route>
            <Route path="/Error" element={<ErrorComponent />}></Route>
            <Route path="/UserPanel" element={<UserComponent />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
