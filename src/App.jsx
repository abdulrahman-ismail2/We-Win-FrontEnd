import "./style.css";
import "./App.scss";

import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";

import { useEffect, useState, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Footer from "./components/Footer";
import SignUp from "./pages/auth/SignUP";

import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [reloadPage, setReloadPage] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleWindowResize = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  useEffect(() => {
    if (reloadPage) {
      window.location.reload();
      setReloadPage(false);
    }
  }, [reloadPage]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    handleWindowResize(); 

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    
    <div className="mx-auto w-full">
      <Routes>
        {/* Auth Pages */}
        <Route
          path={`/login`}
          element={
            <>
              <div className=" space-y-9 overflow-x-hidden">
                {loading && (
                  <div className="flex justify-center items-center gap-14 h-screen w-full fixed z-50 dark:bg-gray-900 bg-white">
                    <div className="dot-spin"></div>
                    <p className="text-lg font-medium dark:text-white">
                      جاري التحميل ... كن صبورًا
                    </p>
                  </div>
                )}
                <Login />
              </div>
            </>
          }
        />
        <Route
          path={`/register`}
          element={
            <>
              <div className=" space-y-9 overflow-x-hidden">
                {loading && (
                  <div className="flex justify-center items-center gap-14 h-screen w-full fixed z-50 dark:bg-gray-900 bg-white">
                    <div className="dot-spin"></div>
                    <p className="text-lg font-medium dark:text-white">
                      جاري التحميل ... كن صبورًا
                    </p>
                  </div>
                )}
                <SignUp />
              </div>
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <div className={`overflow-x-hidden`}>
                <Routes>
                  <Route
                    path="/*"
                    element={
                      <>
                        {loading && (
                          <div className="flex justify-center items-center gap-14 h-screen w-full fixed z-50 bg-white">
                            <div className="dot-spin"></div>
                            <p className="text-lg font-medium text-gray-900">
                              جاري التحميل ... كن صبورًا
                            </p>
                          </div>
                        )}
                        <NavBar
                          toggleSidebar={toggleSidebar}
                          isSidebarOpen={isSidebarOpen}
                        />
                        <div className="pt-20">
                          <Routes>
                            <Route path="/" element={<Home />} />
                          </Routes>
                        </div>
                        <Footer />
                      </>
                    }
                  />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
