import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react"; // Import useState hook
import { Link } from "react-router-dom";
import "../styles/main.css";

function Navbar() {
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false); // State to track if navbar is open

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsOpen(!isOpen); // Toggle the state to indicate if navbar is open or closed
    }

    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
        setIsOpen(false); // Close the navbar and set isOpen to false
    }

    return (
        <header>
            <h3>Logo of Page</h3>
            <nav ref={navRef}>
                {/* Use Link components instead of anchor tags */}
                <Link to="/home" onClick={closeNavbar}>Home</Link>
                <Link to="/blogs" onClick={closeNavbar}>Blog</Link>
                <Link to="/login" onClick={closeNavbar}>Login</Link>
                <Link to="/about" onClick={closeNavbar}>About us</Link>
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
