import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('test'));
root.render(
    <React.StrictMode>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus ea laboriosam nam, porro
            possimus sit? Consequatur culpa ipsam itaque modi nesciunt recusandae vel voluptatum. A cumque labore
            possimus praesentium?</p>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
