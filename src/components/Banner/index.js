import { useEffect } from "react";
import styles from "./Banner.module.css";

function Banner({ image }) {
    useEffect(() => {
        const banner = document.querySelector(`.${styles.banner}`);

        const handleScroll = () => {
            const scroll = window.scrollY;
            const radius = Math.min(scroll / 2, 25);

            if (banner) {
                banner.style.borderBottomLeftRadius = `${radius}px`;
                banner.style.borderBottomRightRadius = `${radius}px`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-${image.toLowerCase()}.png)` }}
        ></div>
    );
}

export default Banner;