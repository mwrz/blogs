import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Dashboard } from './components/Dashboard';
import { Blogs } from './components/Blogs';
import { Blog } from './components/Blog';
import { EditBlog } from './components/EditBlog';
import reportWebVitals from './reportWebVitals';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      }, {
        path: "blogs",
        element: <Blogs />,
      }, {
        path: "blogs/:blogId",
        element: <Blog />,
      }, {
        path: "blogs/:blogId/edit",
        element: <EditBlog />,
      }, {
        path: "*",
        element: <Navigate to="/dashboard" />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
