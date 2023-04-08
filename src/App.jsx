import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavigationBar, Footer } from "./features/layout";
import Home from "./pages/components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
