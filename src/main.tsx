import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./Components/Navbar.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="bg-background min-h-screen">
    <Navbar />
    <RouterProvider router={router} />
  </div>
);
