import useEagerConnect from "../hooks/useEagerConnect";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";

function Home() {

  const triedToEagerConnect = useEagerConnect();


  return (
    <body> 

      <Header triedToEagerConnect={triedToEagerConnect} />

      <Title />
      
      <main>

        <section className="box">
          under 🚧 construction
        </section>

      </main>

      <Footer />

    </body>
  );
};

export default Home;
