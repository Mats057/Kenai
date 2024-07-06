import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

function Nav() {
  return (
    <nav className="hidden text-dark40 lg:flex">
      <ul className="flex gap-8 text-center justify-center text-2xl">
        <li>
          <CiSearch className="text-4xl"/>
        </li>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/">Minha lista</Link>
        </li>
        <li>
          <IoIosNotificationsOutline className="text-4xl"/>
        </li>
        <li>
          <CiUser className="text-4xl"/>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
