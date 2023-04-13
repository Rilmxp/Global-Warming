import {
  Home,
  Temperature,
  CarbonDioxide,
  Methane,
  NitrousOxide,
  PolarIce,
} from "../../../pages/index";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


// configures Routes with useLocation so motion-framer can animate routes transition.
const RoutesTransitionAnimation = () => {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/temperature" element={<Temperature />} />
      <Route path="/carbon-dioxide" element={<CarbonDioxide />} />
      <Route path="/methane" element={<Methane />} />
      <Route path="/nitrous-oxide" element={<NitrousOxide />} />
      <Route path="/polar-ice" element={<PolarIce />} />
    </Routes>
    // </AnimatePresence>
  );
};

export default RoutesTransitionAnimation;
