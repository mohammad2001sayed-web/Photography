import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/about";
import Home from "./components/home/home";
import NotFound from "./components/NotFound/NotFound";
import Row from "./components/row/Row";
import Layout from "./components/Layout/layout";
import Forkify from "./components/api/Forkify";
import BlogDetails from "./components/BlogDetails/BlogDetails"; // 👈 استدعاء مكون تفاصيل المقال
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Terms from "./components/Terms/Terms";

const cbr = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Forkify", element: <Forkify /> },
      { path: "blog/:id", element: <BlogDetails /> }, // 👈 المسار الجديد لتفاصيل المقال
      { path: "Privacy", element: <PrivacyPolicy /> },
      { path: "Terms", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={cbr} />;
}