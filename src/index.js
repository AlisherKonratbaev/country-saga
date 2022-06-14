import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import "./index.css"
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Details from './pages/Details';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route path='/country:alpha3Code' element={<Details />} />
            {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


