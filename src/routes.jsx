import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Chapters from "./pages/Chapters.jsx";
import ChapterDetail from "./pages/ChapterDetail.jsx";
import Phrases from "./pages/Phrases.jsx";
import Applications from "./pages/Applications.jsx";
import Glossary from "./pages/Glossary.jsx";
import Resources from "./pages/Resources.jsx";
import Search from "./pages/Search.jsx";
import Contact from "./pages/Contact.jsx";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "chapters", element: <Chapters /> },
        { path: "chapters/:chapterId", element: <ChapterDetail /> },
        { path: "phrases", element: <Phrases /> },
        { path: "applications", element: <Applications /> },
        { path: "glossary", element: <Glossary /> },
        { path: "resources", element: <Resources /> },
        { path: "search", element: <Search /> },
        { path: "contact", element: <Contact /> }
      ]
    }
  ],
  { basename: "/21c-suntzu-portal" }
);
