import { BrowserRouter as Router } from "react-router-dom";

import { NavigationBar, Footer } from "./features/layout";
import {
  RoutesTransitionAnimation,
  ScrollToTop,
} from "./features/configuration/index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <ScrollToTop>
          <RoutesTransitionAnimation />
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
