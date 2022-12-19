import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Sobre from './components/Sobre/Sobre';
import Noticias from './components/Notícias/Noticias';
import Personagens from './components/Personagens/Personagens';
import Temporadas from './components/Temporadas/Temporadas';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Sobre />
      },
      {
        path: 'noticias',
        element: <Noticias />
      },
      {
        path: 'personagens',
        element: <Personagens />
      },
      {
        path: 'temporadas',
        element: <Temporadas />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
