import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import LaunchDetailsPage from "@/pages/LaunchDetailsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<LaunchDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
