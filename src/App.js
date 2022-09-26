// components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Vision from "./components/vision";
// Styles
import "./assets/scss/main.scss"
import Mission from "./components/mission";
import Responsibility from "./components/responsibility";


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Vision />
      <Mission />
      <Responsibility />
      <Footer />
    </div>
  );
}

export default App;
