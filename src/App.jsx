import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Contato from "./Components/Pages/Contato";
import Empresa from "./Components/Pages/Empresa";
import Projetos from "./Components/Pages/Projetos";
import CriarProjeto from "./Components/Pages/CriarProjeto";
import Container from "./Components/layout/Container"; 
import Navbar from "./Components/layout/Navbar"; 
import Footer from "./Components/layout/Footer";
import EditarProjeto from "./Components/Pages/EditarProjeto";
import DetalhesProjeto from "./Components/Pages/DetalhesProjeto";

function App() { 
  return ( 
    <Router> 
      <Navbar/> 

      <Routes> 
        <Route path="/" element={<Home />} 
        /></Routes>
       <Routes> 
       <Route path="/contato" element={<Contato />} /> 
      </Routes>  

      <Container customClass="min-height">
        <Routes> 

          <Route path="/empresa" element={<Empresa />} /> 
          <Route path="/Projetos" element={<Projetos />} /> 
          <Route path="/Projetos/Criar" element={<CriarProjeto />} /> 
          <Route path="/editar-projeto/:id" element={<EditarProjeto />} />
          <Route path="/projeto/:id" element={<DetalhesProjeto />} />
        </Routes> 
      </Container>

      <Footer/> 
    </Router>
  ); 
}

export default App;
