import React, { useState } from "react";
import ToggleSwitch from "../components/Switch";
import Login from "../components/Login";
import SignUp from "../components/Signup";

const Authorization = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? <Login props={props} /> : <SignUp props={props} />}
      <ToggleSwitch isOn={isLogin} handleToggle={() => setIsLogin(!isLogin)} />
    </div>
  );
};

export default Authorization;
