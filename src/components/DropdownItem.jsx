import { useState } from "react";

const SubMenuItem = ({ title, subItems, setSubItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showSubmenu = () => {
    setIsOpen(true);
  };

  const hideSubmenu = () => {
    setIsOpen(false);
  };

  const handleClick = (item) => {
    setSubItems((prevItems) =>
      prevItems.map((subItem) =>
        subItem.title === title
          ? { ...subItem, isOpen: false }
          : subItem
      )
    );
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="py-2 w-full text-left"
        onMouseEnter={showSubmenu}
        onMouseLeave={hideSubmenu}
      >
        {title}
      </button>
      {isOpen && (
        <div
          className="absolute top-0 left-full mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10"
          onMouseEnter={showSubmenu}
          onMouseLeave={hideSubmenu}
        >
          {subItems?.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
              onClick={() => handleClick(item)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ title, subItems }) => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [internalSubItems, setInternalSubItems] = useState(
    subItems.map((item) => ({ ...item, isOpen: false }))
  );

  const resetSubmenu = () => {
    setSelectedTitle(null);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="py-2 w-full text-left"
        onClick={() => {
          setSelectedTitle(title);
          setInternalSubItems(
            internalSubItems.map((item) => ({
              ...item,
              isOpen: item.title === title ? true : false,
            }))
          );
        }}
      >
        {title}
      </button>
      {internalSubItems.find((item) => item.isOpen) && (
        <div className="absolute top-full -right-1/3 mt-2 p-2 w-48 bg-white rounded-md shadow-xl z-10">
          {internalSubItems?.map((item, index) => (
            <SubMenuItem
              key={index}
              title={item.title}
              subItems={item.subItems}
              setSubItems={setInternalSubItems}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
