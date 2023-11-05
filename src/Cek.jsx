import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./features/auth";
export const LoginPage = () => {
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginInfo));
  };
  if (user) {
    return navigate("/");
  } else {
    return (
      <div className="w-full h-[100vh] items-center justify-center flex">
        <div className="w-[70%] lg:w-[30%] p-6 rounded border">
          <h1 className="font-semibold text-2xl text-center my-4">
            Login Bukapedia
          </h1>
          {error ? (
            <div className="bg-red-600 w-full text-sm p-2 rounded text-white my-2">
              {error}
            </div>
          ) : null}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              className="bg-[#eaeaea] rounded w-full py-1 border px-2"
              type="email"
              placeholder="input your email acount"
              name="email"
              onChange={handleChange}
              required
            />
            <input
              className="bg-[#eaeaea] rounded w-full py-1 border px-2 my-4"
              type="password"
              placeholder="input your password acount"
              name="password"
              onChange={handleChange}
              required
            />
            <button
              className="bg-black rounded w-full text-white py-2"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="bg-[#eaeaea] my-3 p-2 rounded text-sm">
            <h6 className="font-semibold">Demo User</h6>
            <p>email: user@gmail.com</p>
            <p>password: user123</p>
          </div>
          <Link className="py-3 text-sm text-blue-500" to="/">
            back to home
          </Link>
        </div>
      </div>
    );
  }
};
