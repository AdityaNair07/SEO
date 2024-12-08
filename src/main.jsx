import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import { HelmetProvider } from "react-helmet-async";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </HelmetProvider>
);
