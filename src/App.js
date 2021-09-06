

import "./Style"
import Header from './components/Header';
import Banner from './components/Banner';
import Contract from './components/Contract';
import Contracts from './components/Contracts';
import Middle from './components/Middle';
import Card from "./components/Card";
import Partners from "./components/Partners";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Procedure from "./components/Procedure";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Contract/>
      <Procedure/>
      <Contracts />
      <Middle/>
      <Card/>
      <Partners/>
      <Intro/>
      <Footer/>
    </>
  );
}

export default App;
