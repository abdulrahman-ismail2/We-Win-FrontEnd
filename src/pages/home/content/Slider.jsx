import sliderImg from "../../../assets/Delivery.png";

const Slider = () => {
  return (
    <div className="slider mt-12 w-full bg-gray-200 ">
      <div
        className="container mx-auto flex lg:flex-row justify-between items-center
        p-10 rounded-md lg:px-32 flex-col text-center"
      >
        <div className="w-full lg:w-2/4 slider-text">
          <h1 className="text-3xl text-mainColor ">
            اختار خدمة توصيل <span>وي وين</span>
            <br />
            وأبشر بالتوصيل السريع
          </h1>
        </div>
        <div className="w-2/3 lg:w-1/3 flex justify-center">
          <img src={sliderImg} alt="" className="h-full w-2/3" />
        </div>
        <div className="slider-points">
          <span></span>
          <span></span>
          <span className="active"></span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
