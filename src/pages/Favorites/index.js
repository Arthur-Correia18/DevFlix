import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Favorites.module.css";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Banner from "../../components/Banner";

function Favorites() {

    const { favorite } = useFavoriteContext();

    return (
        <>
            <ScrollToTopButton />
            <Header />
            <Banner image="Favoritos"/>
            <Container>
                <section className={styles.favorites}>
                   
                    { <VideoList videos={favorite} emptyHeading="🤔 Sem favoritos 🤔" /> }
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;