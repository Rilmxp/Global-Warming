import {
  Home,
  Temperature,
  CarbonDioxide,
  Methane,
  NitrousOxide,
  PolarIce,
  Error,
} from "../../../pages/index";

import { Routes, Route, useLocation } from "react-router-dom";

// configures Routes with useLocation so motion-framer can animate routes transition.
const RoutesTransitionAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/temperature" element={<Temperature />} />
      <Route path="/carbon-dioxide" element={<CarbonDioxide />} />
      <Route path="/methane" element={<Methane />} />
      <Route path="/nitrous-oxide" element={<NitrousOxide />} />
      <Route path="/polar-ice" element={<PolarIce />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default RoutesTransitionAnimation;
