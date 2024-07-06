import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

function Nav() {
  return (
    <nav className="hidden text-dark40 lg:flex">
      <ul className="flex gap-4 justify-center">
        <li>
          <CiSearch />
        </li>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/">Minha lista</Link>
        </li>
        <li>
          <IoIosNotificationsOutline />
        </li>
        <li>
          <CiUser />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
