import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { MyContext } from "../MyContext";
// import logo from "../pagelogo.png";
import "./css/user.css";

function User() {
  //   const { setIsAuth, setUser } = useContext(MyContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmitReg = async (e) => {
    e.preventDefault();

    const newUser = { username: name, email, password };
    console.log(newUser);

    const response = await fetch(`http://localhost:8000/auth/register/`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    //   credentials: "include",
    });

    try {
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        localStorage.setItem("token", result.access_token);
        setName("");
        setPassword("");
        setEmail("");
        navigate("/");
      } else {
        const errorData = await response.json();
        console.log(errorData,"err");
        setError(errorData.error);
      }
    } catch (error) {
      setError("Enter Correct Input");
    }
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const newUser = { username: name, password };

    const response = await fetch(`http://localhost:8000/auth/login/`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    //   credentials: "include",
    });

    try {
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        localStorage.setItem("token", result.access_token);
        setName("");
        setPassword("");
        setEmail("");
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("Enter Correct Input");
    }
  };
  return (
    <>
      {isLogin ? (
        <div className="container-u">
          <div className="left">
            {/* <img src={logo} alt="logo" style={{ filter: "drop-shadow(1px 2px 6px white)" }} /> */}
          </div>
          <div className="right">
            {/* <h2>
                Login To Explore <br /> Li
              </h2>
              <div className="form">
                <form onSubmit={handleSubmitLogin}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input

                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input type="submit" value="Login" />
                  <p>
                    Don't have an account?{" "}
                    <span onClick={() => setIsLogin(false)}>Register</span>
                  </p>
                </form>

              </div> */}
            <div className="form-container">
              <div className="logo-container">
                Login To Explore <br /> bookShelf
              </div>

              <form className="form" onSubmit={handleSubmitLogin}>
                <div className="form-group">
                  <label for="email">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="form-submit-btn" type="submit">
                  {" "}
                  Login{" "}
                </button>
              </form>

              <p className="signup-link">
                Don't have an account?
                <span
                  onClick={() => setIsLogin(false)}
                  className="signup-link link"
                >
                  {" "}
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-u">
          <div className="left">
            {/* <img src={logo} alt="logo" style={{ filter: "drop-shadow(1px 2px 6px white)" }} /> */}
          </div>
          <div className="right">
            {/* <h2>
                Register To Explore <br /> bookShelf
              </h2>
              <div className="form">
                <form onSubmit={handleSubmitReg}>
                  <input

                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input

                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <input type="submit" value="Register" />
                  <p>
                    Already have an account?{" "}
                    <span onClick={() => setIsLogin(true)}>Login</span>
                  </p>
                </form>

              </div> */}
            <div className="form-container">
              <div className="logo-container">
                Register To Explore <br /> bookShelf
              </div>

              <form className="form" onSubmit={handleSubmitReg}>
                <div className="form-group">
                  <label for="email">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="form-submit-btn" type="submit">
                  {" "}
                  Register{" "}
                </button>
              </form>

              <p className="signup-link">
                Already have an account?
                <span onClick={() => setIsLogin(true)} className="signup-link link">
                  {" "}
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default User;
