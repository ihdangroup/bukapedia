import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, showLoginPage } from "./features/auth/authSlice";
export const LoginPage = () => {
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginInfo));
  };
  return (
    <div className="w-full h-[100vh] items-center justify-center flex">
      <div className="w-[70%] lg:w-[30%] p-6 rounded border">
        <h1 className="font-semibold text-2xl text-center my-4">
          Login Bukapedia
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="bg-[#eaeaea] rounded w-full py-1 border px-2"
            type="email"
            placeholder="input your email acount"
            name="email"
            onChange={handleChange}
          />
          <input
            className="bg-[#eaeaea] rounded w-full py-1 border px-2 my-4"
            type="password"
            placeholder="input your password acount"
            name="password"
            onChange={handleChange}
          />
          <button
            className="bg-black rounded w-full text-white py-2"
            type="submit"
          >
            Login
          </button>
        </form>
        <div
          className="py-3 text-sm text-blue-500"
          onClick={() => dispatch(showLoginPage())}
        >
          back to home
        </div>
      </div>
    </div>
  );
};
