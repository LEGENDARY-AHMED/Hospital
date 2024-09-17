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
        
      ],
    },
  ]);
  return (
    <QueryClientProvider client={routes}>

         
            <RouterProvider router={myRouter} />

    </QueryClientProvider>
  );
}
