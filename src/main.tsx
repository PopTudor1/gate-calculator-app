import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./homepage.tsx";
import GateComparator from "./pages/gate-comparator.tsx";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gate-comparator" element={<GateComparator />} />
        <Route path="/gate-simulator" element={<GateComparator />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
