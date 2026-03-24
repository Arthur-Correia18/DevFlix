import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";

const categories = [
  "Comedia",
  "Romance",
  "Terror",
  "Suspense",
  "Drama",
]

function filterCategory(id) {
  return videos.filter(video => video.category === categories[id] )
}

function App() {
  return (
    <>
      <Header />
      <Banner image="home"/>
      <Container>

        <Category category="Comedia">
           { filterCategory(0).map((video) => <Card id={video.id} key={video.id} />)}
        </Category>

         <Category category="Romance">
           { filterCategory(1).map((video) => <Card id={video.id} key={video.id} />)}
        </Category>

         <Category category="Terror">
           { filterCategory(2).map((video) => <Card id={video.id} key={video.id} />)}
        </Category>

         <Category category="Suspense">
           { filterCategory(3).map((video) => <Card id={video.id} key={video.id} />)}
        </Category>

         <Category category="Drama">
           { filterCategory(4).map((video) => <Card id={video.id} key={video.id} />)}
        </Category>




     </Container>
     <Footer />
    </>
  
  );
}

export default App;
