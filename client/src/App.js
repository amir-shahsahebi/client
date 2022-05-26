import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getAllToDoes } from "./apis/toDoApi";
import AccordionEdited from "./components/AccordionEdited";
import NavbarEdited from "./components/NavbarEdited";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./components/History";

function App() {
  const [allToDoes, setAllToDoes] = useState([]);
  useEffect(() => {
    getAllToDoes().then(({ data }) => setAllToDoes(data.toDoes));
  }, []);
  return (
    <Router>
      <NavbarEdited />
      <Routes>
        <Route path="/" element={<AccordionEdited allToDoes={allToDoes} />} />
        <Route path="/history" element={<History allToDoes={allToDoes} />} />
      </Routes>
    </Router>
  );
}

export default App;
