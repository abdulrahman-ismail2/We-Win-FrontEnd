const Landing = () => {
  return (
    <div className="landing">
      <div className="container mx-auto p-4 text-center text-white">
        <h1 className="p-[50px] text-3xl">
          بيع واشتري في لحظة مع وي وين بكل سهولة 🔥
        </h1>
        <div className="selects flex gap-2 justify-center flex-wrap">
          <span className="border-2">الكل</span>
          <span>عقار</span>
          <span>مركبات</span>
          <span>خدمات</span>
          <span>اجهزة والكترونيات</span>
          <span>وظائف</span>
          <span>اثاث ومستلزمات المنزل </span>
          <span>حيوانات</span>
          <span>رجال ونساء و اطفال</span>
          <span>اخرى</span>
        </div>
        <form action="">
          <div className="search-bar">
            <input type="search" className="w-[100%] my-4 py-2 rounded-xl" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
