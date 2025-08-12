
import { useState } from "react";
function LoginForm() {
  const [showPasssword, setShowPassword] = useState(true);

  function handleShow() {
    // setShowPassword(!showPasssword)

    if (showPasssword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }
  return (
    <>
      <h1> hello, welcome to my website </h1>
      <div>
        <input type="text" placeholder="Email" className="login-input" />
      </div>
      <div>
        <input
          // type="password"
          placeholder="Password"
          className="login-input"
          type={showPasssword ? "text" : "password"}
        />
        <button onClick={handleShow}> {showPasssword? "hide" : 'show'}</button>
      </div>
      <button className=" login-button">Login</button>
      <button className=" login-button"> Sign up</button>
    </>
  );
}


export default LoginForm