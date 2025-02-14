import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Repository from "./pages/Repository";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repo/:repo" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}
