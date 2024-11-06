import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Pages/Layout";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import Salon from "./components/Pages/Salon";
import Academy from "./components/Pages/Academy";
import Classes from "./components/Pages/Classes";
import CareTraining from "./components/Pages/CareTraining";
import Contact from "./components/Pages/Contact";
import Error404 from "./components/Pages/Error404";
import Appointments from "./components/Pages/Appointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "about/salon", element: <Salon /> },
      { path: "training/academy", element: <Academy /> },
      { path: "training/classes", element: <Classes /> },
      { path: "training/caregiver-training", element: <CareTraining /> },
      { path: "appointments", element: <Appointments /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
