const NavLand = (props) => {
  return (
    <div className="navlanding">
      <div className="container mx-auto p-4 flex justify-center items-center h-[100%]">
        <h1 className="font-bold text-2xl text-white">{props.title}</h1>
      </div>
    </div>
  );
};

export default NavLand;
