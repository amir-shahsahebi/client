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
  const [term, setTerm] = useState("");
  const handleInput = (term) => {
    setTerm(term);
  };
  useEffect(() => {
    getAllToDoes().then(({ data }) => setAllToDoes(data.toDoes));
  }, []);
  return (
    <Router>
      <NavbarEdited handleInput={handleInput} />
      <Routes>
        <Route
          path="/"
          element={<AccordionEdited allToDoes={allToDoes} term={term} />}
        />
        <Route
          path="/history"
          element={<History allToDoes={allToDoes} term={term} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
