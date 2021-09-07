import Header from "./components/header/header.components";
import Home from "./pages/home/home.component";
import Footer from "./components/footer/footer.component";
import { magazines_data } from "./magazines-data";
function App() {
  return (
    <div>
      <Header />
      <Home magazines_data={magazines_data} />
      <Footer />
    </div>
  );
}
export default App;
