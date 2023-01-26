import "./Global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import  Dashboard  from "./components/pages/Dashboard";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          {!localStorage.getItem("token") &&
          window.location.pathname === "/dashboard" ? (
            (window.location.href = "/")
          ) : (
            <Dashboard />
          )}
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
