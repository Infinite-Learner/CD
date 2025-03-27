import { useState } from "react";
import { useNavigate } from "react-router";
import "../css/FormComponent.css";
const Form = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const [heading, setHeading] = useState("Register");
  const [switchContent, setContent] = useState("Already have an account?-");
  const [Log_or_Sign, setLogorSign] = useState("Login");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    isLogin ? handleLog() : navigate("/Dashboard");
  };
  const handleLog = () => {
    isLogin
      ? (setLogin(false),
        setHeading("Login"),
        setContent("Are you new?"),
        setLogorSign("Register"))
      : (setLogin(true),
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
            {isLogin ? (
              <div className="inputs">
                <label>Name</label>
                <input
                  type="text"
                  name=""
                 
                  required
                />
              </div>
            ) : <></>}
              <div className="inputs">
                <label>Email</label>
                <input
                  type="email"
                  name=""
                  
                  required
                />
              </div>
            <div className="inputs">
              <label>Password</label>
              <input
                type="password"
                name=""
                
                required
              />
            </div>
            {isLogin ? (
              <div className="inputs">
                <label>Confirm password</label>
                <input
                  type="password"
                  name=""
              
                  required
                />
              </div>
            ) : (
              <></>
            )}
            <button type="submit">{heading}</button>
            <div className="switch">
              {switchContent}
              <button type="button" onClick={handleLog}>
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
