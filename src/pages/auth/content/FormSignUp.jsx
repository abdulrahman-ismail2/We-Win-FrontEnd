import InputField from "../../../components/InputField";
import icon from "../../../assets/googe-icon.webp";
import { useState } from "react";

const FormSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // إرسال البيانات
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg text-purple-600 font-semibold text-center">
        انشاء حساب
      </h2>
      <form onSubmit={handleSubmit}>
        {/* الاسم الكامل */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            الاسم الكامل
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="الاسم الكامل"
          />
        </div>

        {/* // حقل البريد الإلكتروني */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="البريد الإلكتروني"
          />
        </div>

        {/* // حقل كلمة المرور */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            كلمة المرور
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="كلمة المرور"
          />
        </div>

        {/* // حقل تأكيد كلمة المرور */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            تأكيد كلمة المرور
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="تأكيد كلمة المرور"
          />
        </div>

        {/* // اختيار البلد */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            اختر البلد
          </label>
          <select
            id="country"
            name="country"
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {/* أضف الخيارات هنا */}
          </select>
        </div>

        {/* // اختيار المدينة */}
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            اختر المدينة
          </label>
          <select
            id="city"
            name="city"
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {/* أضف الخيارات هنا */}
          </select>
        </div>

        {/* شروط وأحكام التسجيل */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            onChange={handleChange}
            className="mr-2"
          />
          <label
            htmlFor="terms"
            className="block text-gray-700 text-sm font-bold"
          >
            أوافق على شروط وأحكام التسجيل و سياسة الخصوصية
          </label>
        </div>
        {/* زر إنشاء الحساب */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline"
        >
          إنشاء الحساب
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        أو قم بالتسجيل مع...
      </p>
      {/* أيقونات التسجيل مع Google و Facebook */}
    </div>
  );
};

export default FormSignUp;
