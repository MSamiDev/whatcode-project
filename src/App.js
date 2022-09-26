// components
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
// Styles
import "./assets/scss/main.scss"


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
