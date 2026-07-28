import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/about/about";
import Home from "./components/home/home";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import Row from "./components/row/Row";
import Layout from "./components/Layout/layout";
import Forkify from "./components/api/Forkify";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Terms from "./components/Terms/Terms";


const cbr = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: "/Forkify",
        element: <Forkify />,
      },
      {
        path: "/Privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/Terms",
        element: <Terms/>,
      },
      {
        path: "/row",
        element: <Row />,

        children: [
          { index: true, element: <h1>hello 1</h1> },
          { path: "one", element: <h1>hello 1</h1> },
          { path: "two", element: <h1>hello 2</h1> },
          { path: "three", element: <h1>hello 3</h1> },
        ],
      },
    ],
  },
]);

export default function App() {
  let rel = "mohamed sayed";
  let your = "App";
  return (
    <>
        <RouterProvider router={cbr} />
    </>
  );
}
