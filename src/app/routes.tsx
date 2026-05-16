import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AdminPage } from "./pages/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/admin",
    Component: AdminPage,
  },
  {
    path: "*",
    Component: Home,
  },
]);
