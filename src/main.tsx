import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Receipt from './Receipt.tsx'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />}/>
        <Route path={'receipt'} element={<Receipt/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);
