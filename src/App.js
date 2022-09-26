// components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Vision from "./components/vision";
import Responsibility from "./components/responsibility";
import FounderMessage from "./components/founderMessage";
import Mission from "./components/mission";
import GroupCompanies from "./components/groupCompanies";
// Styles
import "./assets/scss/main.scss"


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Vision />
      <Mission />
      <Responsibility />
      <FounderMessage />
      <GroupCompanies />
      <Footer />
    </div>
  );
}

export default App;
