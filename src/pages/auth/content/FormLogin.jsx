/* eslint-disable react/prop-types */
import formImg from "../../../assets/login-img.png";
import icon from "../../../assets/googe-icon.webp";
import InputField from "../../../components/InputField";
import { Link } from "react-router-dom";

export default function FormLogin(props) {
  return (
    <div className="form ">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <form action="">
          <div className="head">
            <h2 className="font-bold text-center text-xl my-8 text-[#8D34FF] ">
              {props.title}
            </h2>
          </div>
          <div className="email-input mb-3">
            <InputField name="الاميل" id="email" type="email" />
          </div>
          <div className="pass-input ">
            <InputField name="الباسورد" id="password" type="password" />
          </div>
          <span className="forgotPassword block relative">
            <a href="" className="text-black absolute left-1 bottom-1 text-xs">
              نسيت الباسورد
            </a>
          </span>
          <input
            type="submit"
            value="تسجيل الدخول"
            className="p-2 rounded-xl bg-[#8D34FF] text-white block mx-auto my-4"
          />
          <p className="text-[#8D34FF] text-center my-4">
            أو قم بتسجيل الدخول بواسطة
          </p>
          <a href="">
            <img src={icon} alt="" className="w-10 mx-auto pointer" />
          </a>
          <Link to="/register" className="w-full flex justify-center mt-4">
            انشاء حساب جديد
          </Link>
        </form>
        <div className="formImg">
          <img src={formImg} alt="" />
        </div>
      </div>
    </div>
  );
}
