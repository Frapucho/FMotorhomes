import {
  BrowserRouter,
  Routes,
  Route,
  // useParams,
  // useSearchParams,
  // useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/home";
import Nav from "./components/Nav";
import Clientes from "./components/Clientes";
import About from "./About";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container" >
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/texto/:text" element={<Texto />} /> */}
          <Route path="/Clientes" element={<Clientes/>} />


        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

/* function Texto() {
  const { text } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let mode = searchParams.get("mode");

  return (
    <>
      <header>
        <Nav />
      </header>
      <div className={mode === "dark" ? "dark-content" : ""}>
        Texto Parametro: {text}
        <br />
        Nombre Search: {searchParams.get("nombre")}
        <br />
        Apellido Search: {searchParams.get("apellido")}
        <br />
        <button onClick={() => navigate(-1)}>← Back</button>
        <button onClick={() => navigate("/texto/test")}>← text</button>
      </div>
    </>
  );
} */

export default App;