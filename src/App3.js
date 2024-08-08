import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Hello />,
      errorElement: <ElementComponent />
    },
    {
        path: "/World",
        element: <World />,
        children: [{
            path: "earth",
            element: <Earth />,
        }]
    },
]);

export default function App(){
    return <RouterProvider router = {router} />;
}

function Hello(){
    return <h1>Hello Thabet</h1>;
}



function ElementComponent(){
    return <h1> Error</h1>;
}

function World(){
    return <div>
        <h1 > Hello World</h1>;
        <Outlet></Outlet>
    </div>
}

function Earth(){
    return <h1>Hello Earth</h1>;
}