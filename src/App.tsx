import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

 export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/",
        element: <Home/>
     
      }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

