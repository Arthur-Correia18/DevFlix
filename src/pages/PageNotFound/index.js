import Header from '../../components/Header';
import erro404 from './erro404.png';
import styles from './PageNotFound.module.css';
import Footer from '../../components/Footer';

function PageNotFound() {
    return (
        
        <>
        <Header />
            <section className={styles.container}>
                <h2>404 - Página Não Encontrada</h2>
                <img src={erro404} alt="logo de página não localizada" />
                <p>A página que você está procurando não existe.</p>
            </section>
         <Footer />
         </>
    )
}   

export default PageNotFound

