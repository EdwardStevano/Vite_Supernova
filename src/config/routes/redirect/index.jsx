import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __NotFound = lazy(() => import('@pages/redirect/notFound'))
const __Unauthorized = lazy(() => import('@pages/redirect/unauthorized'))

function NotFoundRoutes() {
  return (
      <Routes>
        <Route path="/unauthorized" element={<__Unauthorized />} />
        <Route component={<__NotFound />} />
      </Routes>
  );
}

export default NotFoundRoutes;
