import Product from "../../../components/Product";

const Discover = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="section-head ">
          <h1 className="font-bold text-2xl my-8">استكشف المزيد</h1>
        </div>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Discover;
