import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";

import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route index element={<CreateEmployee />}/>
        <Route path="/createemployee" element={<CreateEmployee />} />
        <Route path="/currentemployees" element={<CurrentEmployees />} />
        <Route path="/*" element={<CreateEmployee />} />
      </Routes>

    </Router>
  );
}

export default App;
