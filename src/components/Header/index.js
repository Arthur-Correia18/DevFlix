import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {

const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <Link to="/">
                    <span>DevFlix</span>
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favoritos</Link>
                    <Link to="/search"> 🔎︎  Pesquisar</Link>
                </nav>
            </header>

        );  
    }

    export default Header;
