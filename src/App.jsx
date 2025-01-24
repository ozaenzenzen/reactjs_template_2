import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Blog />
      <Newsletter />
      <MyFooter />
    </>
  );
}

export default App;
