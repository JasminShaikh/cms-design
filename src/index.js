import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles.css'; // Import your local styles

// Import the CMS Design System styles
import '@cmsgov/design-system/css/index.css';
import '@cmsgov/design-system/css/core-theme.css';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Performance measurement
reportWebVitals(); 