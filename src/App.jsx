import React from "react";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieDeatail from "./pages/movie-detail";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;


//Jurassic World Rebirth (2025)
// /movie/1234821 => movieId = 1234821

//The Pickup (2025)
// /movie/1106289 => movieId = 1106289