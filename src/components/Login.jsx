import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assests/header-Logo.png";
import RightImg from "../assests/login.png";
import "../styles/Login.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password: password,
      });

      setIsLoggedIn(true);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.payload));
      navigate("/pages");
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response.data.message);
    }
  };
  React.useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="container">
      <Toaster />
      <div className="main">
        <div className="col-6">
          <div className="leftSide">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <h2 className="heading">Welcome to Shop Satellite Tv</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ultrices varius odio, sit amet euismod lorem ultricies eget.
              Nullam ac aliquam massa. Fusce ullamcorper nisl ultrices tortor
              consectetur tincidunt.
            </p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <LoadingButton
              loading={loading}
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </LoadingButton>
          </div>
        </div>
        <div className="col-6">
          <div className="rightSide">
            <img className="right-img" src={RightImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
