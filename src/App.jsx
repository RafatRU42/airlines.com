import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Pages/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Helmet defaultTitle="Enjoy The Flight">
        <title>Airlines.com</title>
        </Helmet>
        <RouterProvider router={router}></RouterProvider>
      
      <Toaster></Toaster>
    </div>
  );
}

export default App;
