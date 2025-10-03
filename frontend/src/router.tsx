import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

// Create routes
const routeTree = [
  {
    path: "/",
    component: () => <div className="p-4">🏠 Home</div>,
  },
  {
    path: "/board",
    component: () => <div className="p-4">🖌 Whiteboard</div>,
  },
];

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
