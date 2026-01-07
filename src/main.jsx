import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Prevent browser scroll restoration
if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}

// Ensure page starts at top on initial load
window.scrollTo(0, 0);

const rootElement = document.getElementById('root');
if (!rootElement) {
    console.error("Could not find root element with id 'root'");
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    console.log("React app mounted successfully");
    
    // Ensure scroll position is at top after React mounts
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
}
