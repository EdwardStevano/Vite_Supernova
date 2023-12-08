import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __MainPage = lazy(() => import('@pages/main'))
const __Home__Section = lazy(() => import('@pages/main/content/home/mainHome'))

function MainRoutes() {
  return (
      <Routes>
        <Route path="/" element={<__MainPage />}>
            <Route index element={<__Home__Section />} />
            <Route path="/home" element={<__Home__Section />} />
        </Route>
      </Routes>
  );
}

export default MainRoutes;
