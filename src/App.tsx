import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import LandingPage from "./pages/landing";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
]);
function App() {
  return (
    <Fragment>
      <ConfigProvider>
        <RouterProvider router={routes} />
      </ConfigProvider>
    </Fragment>
  );
}

export default App;
