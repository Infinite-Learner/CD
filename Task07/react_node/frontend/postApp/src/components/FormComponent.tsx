import { BaseSyntheticEvent, useState } from "react";

import "../css/FormComponent.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Form = () => {
  const [isRegister, setRegister] = useState<boolean>(true);
  const [heading, setHeading] = useState("Register");
  const [switchContent, setContent] = useState("Already have an account?-");
  const [Log_or_Sign, setLogorSign] = useState("Login");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    CPassword: "",
    Role: "",
  });
  const navigate = useNavigate();
  const registerUser = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/user/signup", {
        headers: { "Content-Type": "application/json" },
        username: formData.Name,
        email: formData.Email,
        password: formData.Password,
        role: formData.Role,
      });
      return data.success;
    } catch (error) {
      return false;
    }
  };
  const UserLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:3001/user/login", {
        headers: { "Content-Type": "application/json" },
        email: email,
        password: password,
      });
      console.log(data);
      if(!data.success) return false;
      window.sessionStorage.setItem('auth_token',data.token);
      window.sessionStorage.setItem('userId',data.userId);
      window.sessionStorage.setItem('Role',data.role.toUpperCase())
      return data.success;
    } catch (error) {
      return false;
    }
  };
 const componentDecider = ()=>{
    const {Role} = window.sessionStorage;
    Role==="ADMIN"?navigate("/AdminPanel"):Role==="USER"?navigate("/UserPanel"):alert("Something went wrong")
    
 }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    isRegister
      ? formData.Password === formData.CPassword
        ? (alert("REGISTER"),
          reset(),
          (await registerUser()) ? alert("Success") : alert("failed"))
        : alert("password not match")
      : (reset(),
        (await UserLogin(formData.Email, formData.Password)
        )
          ? componentDecider()
          : alert("failed"));
  };
  const dataChange = (e: BaseSyntheticEvent, key: string) => {
    setFormData({
      Name: key === "Name" ? e.target.value : formData.Name,
      Email: key === "Email" ? e.target.value : formData.Email,
      Password: key === "Password" ? e.target.value : formData.Password,
      CPassword: key === "CP" ? e.target.value : formData.CPassword,
      Role: key === "Role" ? e.target.value : formData.Role,
    });
  };
  const reset = () =>
    setFormData({
      Name: "",
      Email: "",
      Password: "",
      CPassword: "",
      Role: "",
    });
  const handleForm = () => {
    isRegister
      ? (setRegister(false),
        setHeading("Login"),
        setContent("Are you new?"),
        setLogorSign("Register"))
      : (setRegister(true),
        setHeading("Register"),
        setContent("Already have an account?"),
        setLogorSign("Login"));
  };
  return (
    <div className="form-container">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="heading">{heading}-Form</div>
        <div className={`${heading}-form`}>
          <div className="input-container">
            {isRegister ? (
              <div className="inputs">
                <label>Name</label>
                <input
                  type="text"
                  name=""
                  value={formData.Name}
                  onChange={(e: BaseSyntheticEvent) => {
                    dataChange(e, "Name");
                  }}
                  required
                />
              </div>
            ) : (
              <></>
            )}
            <div className="inputs">
              <label>Email</label>
              <input
                type="email"
                name=""
                value={formData.Email}
                onChange={(e: BaseSyntheticEvent) => {
                  dataChange(e, "Email");
                }}
                required
              />
            </div>
            <div className="inputs">
              <label>Password</label>
              <input
                type="password"
                name=""
                onChange={(e: BaseSyntheticEvent) => {
                  dataChange(e, "Password");
                }}
                value={formData.Password}
                required
              />
            </div>
            {isRegister ? (
              <>
                <div className="inputs">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    onChange={(e: BaseSyntheticEvent) => {
                      dataChange(e, "CP");
                    }}
                    value={formData.CPassword}
                    name=""
                    required
                  />
                </div>
                <div className="inputs">
                  <label>Select Role</label>
                  <select
                    onChange={(e: BaseSyntheticEvent) => {
                      dataChange(e, "Role");
                    }}
                    name=""
                    required
                    defaultValue={"Select role"}
                  >
                    <option value="Select role" disabled>
                      Select Role
                    </option>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}
            <button type="submit">{heading}</button>
            <div className="switch">
              {switchContent}
              <button type="button" onClick={handleForm}>
                {Log_or_Sign}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Form };
