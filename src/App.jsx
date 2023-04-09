import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavigationBar, Footer } from "./features/layout";
import {
  Home,
  Temperature,
  CarbonDioxide,
  Methane,
  NitrousOxide,
  PolarIce,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/carbon-dioxide" element={<CarbonDioxide />} />
          <Route path="/methane" element={<Methane />} />
          <Route path="/nitrous-oxide" element={<NitrousOxide />} />
          <Route path="/polar-ice" element={<PolarIce />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
