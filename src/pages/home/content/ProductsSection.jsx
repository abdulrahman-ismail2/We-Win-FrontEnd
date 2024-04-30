import Product from "../../../components/Product";
export default function ProductsSection() {
  return (
    <div className="ads">
      <div className="container  mx-auto">
        <div className="section-head ">
          <h1 className="font-bold text-2xl my-8">اعلانات سوبر</h1>
        </div>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};
