import axios from "axios";
import React, { ChangeEvent, FormEvent } from "react";
import { FormMethod, Link } from "react-router-dom";

const Register = () => {
  interface RegisterForm {
    fullname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  const [register, setRegister] = React.useState<RegisterForm>({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hanldeChange = (
    e: ChangeEvent<HTMLInputElement>,
    fields: keyof RegisterForm
  ): void => {
    setRegister({ ...register, [fields]: e.target.value });
  };

  const hanldeEvent = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (register.password !== register.confirmPassword)
        throw new Error("Password did not match");

      const { fullname, password, username, email } = register;
      const newObject = {
        fullname,
        password,
        username,
        email,
      };
      await axios.post(`/api/v1/user/register`, newObject);
    } catch (error) {
      throw new Error(`Failed while submitting : ${error}`);
    }
  };

  return (
    <div className="flex items-center w-full h-[500px] justify-center">
      <div className="flex flex-col items-center  gap-[50px] bg-[#3e65a0]  w-[400px] rounded-md py-[10px] px-[7px] mt-4">
        <h3 className="flex flex-col items-center font-mono font-extrabold text-[20px]">
          Welcome <span className="text-[15px] italic">To</span>{" "}
          <span className="font-serif bg-gradient-to-r from-[#ece93f] to-[#ca4747] bg-clip-text text-transparent">
            HOTELBOOK.COM
          </span>
        </h3>
        <form
          action=""
          className="flex flex-col gap-[10px] items-center justify-center"
          onSubmit={hanldeEvent}
        >
          <label htmlFor="" className="flex flex-col ">
            FullName
            <input
              className="w-full px-[20px] py-[5px] rounded-sm outline-none"
              type="fullname"
              placeholder="Enter Your Name"
              value={register.fullname}
              onChange={(e) => hanldeChange(e, "fullname")}
            />
          </label>
          <label htmlFor="" className="flex flex-col ">
            Username
            <input
              className="w-full px-[20px] py-[5px] rounded-sm outline-none"
              type="text"
              placeholder="Enter Your UserName"
              value={register.username}
              onChange={(e) => hanldeChange(e, "username")}
            />
          </label>
          <label htmlFor="email" className="flex flex-col ">
            Email
            <input
              className="w-full px-[20px] py-[5px] rounded-sm outline-none"
              type="email"
              placeholder="Enter Your Email"
              value={register.email}
              onChange={(e) => hanldeChange(e, "email")}
            />
          </label>
          <label htmlFor="password" className="flex flex-col ">
            Password
            <input
              className="w-full px-[20px] py-[5px] rounded-sm outline-none"
              type="password"
              placeholder="Enter Your Password"
              value={register.password}
              onChange={(e) => hanldeChange(e, "password")}
            />
          </label>
          <label htmlFor="confirmPassword" className="flex flex-col ">
            confirm password
            <input
              className="w-full px-[20px] py-[5px] rounded-sm outline-none"
              type="password"
              placeholder="Enter Your Password"
              value={register.confirmPassword}
              onChange={(e) => hanldeChange(e, "confirmPassword")}
            />
          </label>
          <button className="bg-gray-900 rounded-sm py-[5px] px-[30px] w-[240px] mt-[10px] text-white">
            submit
          </button>
          <h4>
            Already Have An Account ? <Link to={"/login"}>Login</Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Register;
