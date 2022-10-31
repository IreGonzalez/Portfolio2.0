import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './components/App';
import 'typeface-lato';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
    <Routes>
      
    </Routes>
		<App />
	</BrowserRouter>
);


