import NavLand from "../../components/NavLand"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import FormLogin from "./content/FormLogin"


const Login = () => {
  return (
    <div>
        <NavBar />
        <NavLand title ="تسجيل الدخول" />
        <FormLogin title ="تسجيل الدخول" />
        <Footer />
    </div>
  )
}

export default Login