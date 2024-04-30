import {
  CaretDown,
  Globe,
  Headset,
  List,
  ShoppingCartSimple,
  X,
} from "@phosphor-icons/react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const NavBar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="mx-auto nav fixed w-full top-0 z-50 bg-white shadow-lg">
      <div className="md:container mx-auto p-3 flex items-center justify-between relative">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="header-mid flex items-center gap-3">
          <div
            className={`md:hidden absolute top-full flex flex-col duration-150
              ease-linear h-72 rounded-b-md shadow-lg
              items-center justify-center w-full bg-white gap-5
              px-10 pt-7 pb-10 ${
                isSidebarOpen ? "left-0" : "-left-full"
              } !z-50`}
          >
            <p className="text-mainColor font-semibold pl-3">
              جرب اعلانات سوبر وخلي اعلانك يوصل للكل 🔥⚡
            </p>
            <div
              className={`flex gap-3 cursor-pointer w-2/3 p-1 
              duration-100 ease-linear rounded-md pr-2 justify-center
              hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500
              hover:text-white text-mainColor`}
            >
              <ShoppingCartSimple size={28} weight="fill" />
              <h1 className="font-medium text-lg">السلة</h1>
            </div>
            <div
              className={`flex gap-3 cursor-pointer w-2/3 p-1 
              duration-100 ease-linear rounded-md pr-2 justify-center
              hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500
              hover:text-white text-mainColor`}
            >
              <Headset
                weight="fill"
                className="lg:bg-[#EEEEEE] rounded-full lg:p-2 h-7 w-7 lg:h-10 lg:w-10"
              />
              <h1 className="font-medium text-lg">الدعم</h1>
            </div>

            <div className="flex justify-center w-full items-center text-[#7E7E7E]">
              <span className="span border-l-2 border-[#7E7E7E] pl-2">
                Arabic
              </span>
              <div className="lang-icon flex items-center">
                <Globe
                  size={28}
                  weight="fill"
                  className={"mr-2 text-mainColor"}
                />
                <CaretDown
                  size={28}
                  weight="fill"
                  className={"mx-2 text-mainColor"}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full gap-4 items-center">
              <div className="btn w-1/2 text-center p-2 rounded-lg text-white">
                <a href="">انشر اعلانك</a>
              </div>
              <div
                className={`flex gap-3 cursor-pointer w-1/2 p-1 
              duration-100 ease-linear rounded-md pr-2 text-center
              hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500
              hover:text-white text-mainColor`}
              >
                <Link to="/login" className="w-full">تسجيل دخول</Link>
              </div>
            </div>
          </div>
          {/*  */}
          {/* desktop */}
          <div className={`hidden md:flex items-center gap-2`}>
            <p className="text-mainColor font-semibold pl-3 hidden md:block">
              جرب اعلانات سوبر وخلي اعلانك يوصل للكل 🔥⚡
            </p>
            <ShoppingCartSimple
              size={28}
              weight="fill"
              className="text-mainColor"
            />
            <Headset
              size={40}
              weight="fill"
              className=" text-mainColor lg:bg-[#EEEEEE] rounded-full p-2"
            />

            <div className="hidden md:flex justify-between items-center text-[#7E7E7E]">
              <span className="span border-l-2 border-[#7E7E7E] pl-2">
                Arabic
              </span>
              <div className="lang-icon flex items-center">
                <Globe
                  size={28}
                  weight="fill"
                  className={"mr-2 text-mainColor"}
                />
                <CaretDown
                  size={28}
                  weight="fill"
                  className={"mx-2 text-mainColor"}
                />
              </div>
            </div>
          </div>

          <button
            className="relative inline-flex items-center justify-center rounded-md p-2 md:hidden
                text-gray-400 hover:bg-white hover:text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <X
                className={"text-mainColor h-7 w-7"}
                weight="fill"
                aria-hidden="true"
              />
            ) : (
              <List
                className={"text-mainColor  h-7 w-7"}
                weight="fill"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <div className="btn p-2 rounded-lg text-white">
            <a href="">انشر اعلانك</a>
          </div>
          <div className="btn2 text-mainColor">
            <Link to="/login">تسجيل دخول</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
