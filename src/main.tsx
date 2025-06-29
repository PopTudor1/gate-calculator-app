import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protected-route.tsx";
import Homepage from "./homepage.tsx";
import GateComparator from "./pages/gate-comparator/gate-comparator.tsx";
import Login from "./pages/login/login.tsx";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/gate-comparator"
          element={
            <ProtectedRoute>
              <GateComparator />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/gate-simulator" element={<GateComparator />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
