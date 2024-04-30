import prodcutImg from "../assets/car.jpeg";
import { motion, useScroll } from "framer-motion";

const Product = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="product border-2 rounded"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img src={prodcutImg} alt="" className="rounded" />
      <div className="info flex justify-between p-3 text-[#7E7E7E] text-xs">
        <span className="date">يناير 25</span>
        <span className="flex items-center">
          <i className="fa-solid fa-location-dot"></i>
          <span className="location mr-4">الرياض</span>
        </span>
      </div>
      <h2 className="product-name p-3 text-[#515151]">سواتش اوميغا الاصلية</h2>
      <span className="price p-3 text-mainColor">200000 جنيه مصري</span>
      <div className="footer p-3 flex items-center justify-between ">
        <span className="border-2 rounded p-1 text-xs">
          حالة المعروض : مستعمل
        </span>
        <span>
          <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
        </span>
      </div>
    </motion.div>
  );
};

export default Product;
