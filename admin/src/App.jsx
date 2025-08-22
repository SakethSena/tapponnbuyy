import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Admin from "./Pages/Admin";

export const backend_url = 'http://localhost:4000';
export const currency = '$';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Admin />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;