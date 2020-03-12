import React, { useState } from "react";
import ToggleSwitch from "../components/Switch";
import Login from "../components/Login";
import SignUp from "../components/Signup";

const Authorization = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <ToggleSwitch isOn={isLogin} handleToggle={() => setIsLogin(!isLogin)} />
      {isLogin ? <Login /> : <SignUp />}
    </div>
  );
};

export default Authorization;
