import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AdminProvider } from './AdminContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <AdminProvider>
        <App />
    </AdminProvider>
    // {/* </React.StrictMode> */}
);
