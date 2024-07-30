import Menu from "./menu";
import NavButtons from "./nav-buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

const NavSection = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(true);
  };
  const [hide, setHide] = useState();
  const hideMenu = () => {};

  return (
    <div>
      <div className="hidden md:flex md:gap-8">
        <Menu />
        <NavButtons />
      </div>
      <div className="md:hidden flex">
        <GiHamburgerMenu onClick={showMenu} />
        <XIcon onClick={hideMenu} />
      </div>
      {show ? <MobileMenu /> : <div></div>}
      {/* <MobileMenu /> */}
    </div>
  );
};

export default NavSection;
