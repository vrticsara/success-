import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Navbar() {
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsOpen(!isOpen);
    }

    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
        setIsOpen(false);
    }

    return (
        <header>
            <h3>Revlon Shop</h3>
            <nav ref={navRef}>
                {}
                <Link to="/blogs" onClick={closeNavbar}>Blog</Link>
                <Link to="/about" onClick={closeNavbar}>About us</Link>
                <Link to="/login" onClick={closeNavbar}>Login</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            {/* Render the menu icon only if navbar is closed */}
            {!isOpen && (
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            )}
        </header>
    )
}

export default Navbar;
