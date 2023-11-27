import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/main.css";
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";

// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
// import BookRoomPage from "./pages/BookRoomPage";
// import ContactsPage from "./pages/ContactsPage";
// import AboutUsPage from "./pages/AboutUsPage";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router = {router}/> */}
  </React.StrictMode>
);
