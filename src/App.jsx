import { createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./component/layout/Layout";
import Login from "./component/login/Login";
import Signup from "./component/Signup/Signup";
import Forgotten from "./component/Forgotten/Forgotten";
import GlobalContext from "./context/GlobalContext";

export default function App() {
  const routes = new QueryClient();

  const myRouter = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/Login", element: <Login /> },
        { path: "/Sign-up", element: <Signup /> },
        { path: "/Forgot-pass", element: <Forgotten /> },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={routes}>
      <GlobalContext>
        <RouterProvider router={myRouter} />
      </GlobalContext>
    </QueryClientProvider>
  );
}
