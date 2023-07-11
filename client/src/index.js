import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./app";

/**
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/**/

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/**/
root.render(
  <StrictMode>
    <App />
  </StrictMode>
 );
/**/

/*
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/