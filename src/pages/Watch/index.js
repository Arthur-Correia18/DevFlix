import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";

function Watch() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>Assistir</h1>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/GWowPnB4K3Q?si=9mfmJ93DtoFbP3qz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer />
        </>

    );
}

export default Watch;