import Select from "react-select";
import DropdownItem from "./DropdownItem";

const MainLinks = () => {
  const menuItems = [
    {
      title: "البحث عن الفنادق",
      subItems: [
        { title: "البحث عن الفنادق" },
        { title: "فندق 1", subItems: ["تفاصيل 1", "تفاصيل 2"] },
        { title: "فندق 2", subItems: ["تفاصيل 1", "تفاصيل 2"] },
        { title: "فندق 3", subItems: ["تفاصيل 1", "تفاصيل 2"] },
      ],
    },
  ];

  return (
    <div className="main-links">
      <div className="container mx-auto p-4 flex items-center justify-center">
        {/* <form action="" className="text-[#A3A3A3]"> */}
          {/* <div className="mx-auto bg-white shadow-md rounded px-6"> */}
            {/* {menuItems.map((item, index) => (
              <DropdownItem
                key={index}
                title={item.title}
                subItems={item.subItems}
              />
            ))} */}

            <Select />
          {/* </div> */}
        {/* </form> */}
        <div className="links">
          <ul className="flex">
            <li>
              <a href="" className="text-mainColor">
                اعلانات سوبر
              </a>
            </li>
            <li>
              <a href="" className="text-mainColor">
                العروض المتاحة{" "}
              </a>
            </li>
            <li>
              <a href="" className="text-mainColor">
                اعلانات لفترة محدودة
              </a>
            </li>
            <li>
              <a href="" className="text-[#A3A3A3]">
                استكشف المزيد
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLinks;
