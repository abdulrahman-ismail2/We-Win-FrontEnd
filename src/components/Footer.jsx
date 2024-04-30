import Logo from "../assets/Marketing.png";

export default function Footer() {
  return (
    <div className="footer bg-[#202A36] mt-10">
      <div className="container mx-auto p-4">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-content">
          <div>
            <p className="text-white font-bold mb-2">
              شركة تسويق لجميع الخدمات والمنتجات
            </p>
            <span className="!no-underline	">تابعنا</span>
            <div className="socail-icon flex gap-3 cursor-pointer text-lg text-white pt-3">
              <a href="">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
          <div>
            <span className="cursor-pointer">الفئات</span>
            <ul>
              <li>
                <a href="">عقار</a>
              </li>
              <li>
                <a href="">مركبات</a>
              </li>
              <li>
                <a href="">رجال ونساء واطفال</a>
              </li>
              <li>
                <a href="">اخري</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="cursor-pointer">وى ون</span>
            <ul>
              <li>
                <a href="">نبذة عنا</a>
              </li>
              <li>
                <a href="">الخصوصية</a>
              </li>
              <li>
                <a href="">بنود الخدمة</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="cursor-pointer">للدعم والتواصل</span>
            <ul>
              <li>
                <a href="">+201514624</a>
              </li>
              <li>
                <a href="">0224576412</a>
              </li>
              <li>
                <a href="">0224562197</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
