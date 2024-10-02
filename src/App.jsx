import { createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./component/layout/Layout";
import Login from "./component/login/Login";
import Signup from "./component/Signup/Signup";
import Forgotten from "./component/forgotten/Forgotten";
import Verify from "./component/Verify/Verify";
import About from "./component/about/About";
import Change from "./component/Change password/changePassword";
import Doctor from "./component/doctor/Doctor";
import AppGlobalProvider from "./context/GlobalContext";
import AuthenticateProvider from "./context/AutheContext";

export default function App() {
  const queryClient = new QueryClient();

  const myRouter = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/Login", element: <Login />  },
        { path: "/Sign-up", element: <Signup /> },
        { path: "/Forgot-pass", element: <Forgotten /> },
        { path: "/Verify", element: <Verify /> },
        { path: "/Change-pass", element: <Change /> },
        { path: "/About-us", element: <About /> },
        { path: "/Find-a-doctor", element: <Doctor /> },



      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
       <AuthenticateProvider>
      <AppGlobalProvider>
        <RouterProvider router={myRouter} />
      </AppGlobalProvider>
      </AuthenticateProvider>
    </QueryClientProvider>
  );
}
