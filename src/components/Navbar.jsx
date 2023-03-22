import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import List from "./NavList";
function Navbar() {
  const [nav, useNav] = useState(false);
  const handleNav = () => useNav(!nav);
  return (
    <div className="text-white flex justify-between p-4  items-center h-24 max-w-[1200px] mx-auto px-4">
      <h1 className="w-full text-3xl text-[#00df9a] font-bold">React.</h1>
      <ul className="hidden md:flex">
        <List title="Home" />
        <List title="Resources" />
        <List title="Company" />
        <List title="About" />
        <List title="Contact" />
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "w-[60%] fixed top-0 left-0 bg-[#000300] border-r h-full border-r-gray-900  ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl text-[#00df9a] font-bold m-4">React.</h1>

        <ul className="uppercase p-4">
          <li className="p-2 border-b border-grey-600">Home</li>
          <li className="p-2 border-b border-grey-600">Company</li>
          <li className="p-2 border-b border-grey-600">Resources</li>
          <li className="p-2 border-b border-grey-600">About</li>
          <li className="p-2">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
