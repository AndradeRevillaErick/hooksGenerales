import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { AboutPage } from './09-useContext/AboutPage';
import { HomePage } from './09-useContext/HomePage';
import { LoginPage } from './09-useContext/LoginPage';

// import { CallbackHook } from './06-memos/CallbackHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { MemoHook } from './06-memos/MemoHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import './index.css'

// import './08-useReducer/intro-reducer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
    errorElement: <MainApp/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
