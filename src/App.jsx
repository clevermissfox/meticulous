import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Pages/Layout";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import Salon from "./components/Pages/Salon";
import Contact from "./components/Pages/Contact";
import Error404 from "./components/Pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "about/salon", element: <Salon /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
