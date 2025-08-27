import React from "react";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieDeatail from "./pages/movie-detail";
import 'react-circular-progressbar/dist/styles.css';
import Demo from "./pages/demo-responsive";
import SearchPage from "./components/search";


function App() {
  // config router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:movieId", // slug
      element: <MovieDeatail />,
    },
    {
      path: "/search/:keyWord", // slug
      element: <SearchPage />,
    },
    {
      path: "demo", // slug
      element: <Demo />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;


//Jurassic World Rebirth (2025)
// /movie/1234821 => movieId = 1234821

//The Pickup (2025)
// /movie/1106289 => movieId = 1106289