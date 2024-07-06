import Logo from "../../Logo/Logo";
import MobileNav from "./MobileNav/MobileNav";
import Nav from "./Nav/Nav";

function Header() {
    return (
        <header className="flex justify-between p-6">
            <Logo size='2xl' />
            <Nav />
            <MobileNav />
        </header>
    )
}

export default Header;