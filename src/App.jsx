import { createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout/Layout";


export default function App() {
  const routes = new QueryClient();

  const myRouter = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
            

        // Add your routes here

        // Example:
        // { path: "/about", element: <About /> },
        // { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={routes}>

         
            <RouterProvider router={myRouter} />

    </QueryClientProvider>
  );
}
