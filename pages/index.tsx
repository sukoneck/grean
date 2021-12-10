import useEagerConnect from "../hooks/useEagerConnect";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";

function Home() {

  const triedToEagerConnect = useEagerConnect();


  return (
    <section className="container"> 

      <Header triedToEagerConnect={triedToEagerConnect} />

      <Title />
      
      <main>

        <section className="descriptionbox">
          under 🚧 construction
        </section>

      </main>

      <Footer />

    </section>
  );
};

export default Home;
