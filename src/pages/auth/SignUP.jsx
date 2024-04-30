import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import NavLand from "../../components/NavLand";
import FormSingUp from "./content/FormSignUp";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <NavLand title ="انشاء الحساب" />
      <FormSingUp />
      <Footer />
    </>
  );
};

export default SignUp;
