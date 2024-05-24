import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client' en lugar de 'react-dom'
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Utiliza createRoot en lugar de ReactDOM.render
  root.render(
    <React.StrictMode>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" />
      <App />
    </React.StrictMode>
  );
}
