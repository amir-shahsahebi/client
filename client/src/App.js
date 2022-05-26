import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getAllToDoes } from "./apis/toDoApi";
import AccordionEdited from "./components/AccordionEdited";
import NavbarEdited from "./components/NavbarEdited";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      </Routes>
    </Router>
  );
}

export default App;
