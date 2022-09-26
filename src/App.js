// components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Vision from "./components/vision";
import Responsibility from "./components/responsibility";
// Styles
import "./assets/scss/main.scss"
import Mission from "./components/mission";
import FounderMessage from "./components/founderMessage";


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Vision />
      <Mission />
      <Responsibility />
      <FounderMessage />
      <Footer />
    </div>
  );
}

export default App;
