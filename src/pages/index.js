import Layout from "./../components/Layout";
import Header from "./../components/Header";
import Hero from "./../components/Hero";
import About from "./../components/AboutUs";
import New from './../components/New';
import Covid from './../components/Covid';
import Services from './../components/Services1';
import Footer from './../components/Footer';

const Index = () => {


  return (
    <Layout pageTitle="Vedras | No stoping now">
      <Header />
      <Hero />
      <About />
      <New />
      <Covid />
      <Services />
      <Footer />
    </Layout>
  )
}

export default Index;