import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("singh@gmail.com");
    const [password, setPassword] = useState("Singh@123");
    const onClickHandle = async () => {
        try{
            const res = await axios.post("http://localhost:3000/login",{
                email,
                password
            },{withCredentials:true});
        }catch(err){
            console.error(err);
        }
    };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">EmailId</span>
            </div>
            <input
              type="text"
              value={email}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={onClickHandle}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
