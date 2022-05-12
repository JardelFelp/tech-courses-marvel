import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './index.css';
import ToDoList from './pages/ToDoList';
import App from './pages/App';
import Comics from './pages/Comics/Comics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/comics" element={ <Comics /> } />
        <Route path="/to-do" element={ <ToDoList /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
