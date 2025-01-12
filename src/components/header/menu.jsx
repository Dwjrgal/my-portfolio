import Link from "next/link";

const Menu = ({ menuList }) => {
  return (
    <div className="flex flex-col space-x-4 md:flex-row">
      {menuList.map((menu) => (
        <p key={menu.label}>
          <Link
            href={`${menu.link}`}
            className="text-gray-700 dark:text-gray-200"
          >
            {menu.label}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Menu;
