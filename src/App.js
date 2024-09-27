import './App.css';
import Header from "./component/Header";
import Siderbar_container from './component/Siderbar_container';
import Features from './component/Features';
import Design from './component/Design';
import Connect_store from './component/Connect_store';
import Sales from './component/Sales';
import Social_opinion from "./component/Social_opinion";
import Financials from "./component/Financials";
import Footer from './component/Footer';

const App=function() {
  return (
    <>
      <Header/>
      <Siderbar_container/>
      <Features/>
      <Design/>
      <Connect_store/>
      <Sales/>
      <Social_opinion/>
      <Financials/>
      <Footer/>
    </>
    
  );
}

export default App;
