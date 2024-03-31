import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Home } from './pages/home.jsx'
// import { ErrorPage } from './pages/ErrorPage.jsx'
// import { Login } from './pages/Login.jsx'
// import { Register } from './pages/Register.jsx'
// import { Messages } from './pages/Messages.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   }
// ])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/" ,
//         element: <Home />,
//       },
//       {
//         path: "/Login",
//         element: <Login />,
//       },
//       {
//         path: "/Register",
//         element: <Register />,
//       },
//       {
//         path: "/Messages",
//         element: <Messages />
//       }
    

//     ]
//   }
// ])
/* <RouterProvider router={router} /> */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
)
