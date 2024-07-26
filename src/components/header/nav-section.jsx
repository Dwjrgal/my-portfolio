import Menu from "./menu";
import NavButtons from "./nav-buttons";

const NavSection = () => {
  return (
    <div>
      <div className="hidden md:flex md:gap-8">
        <Menu />
        <NavButtons />
      </div>
      <div></div>
    </div>
  );
};

export default NavSection;
