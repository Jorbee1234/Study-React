import React from "react";
import ReactDOM from "react-dom/client"; // Alterado para importar de 'react-dom/client'
import App from './main/app';

// Crie um root para a renderização
const root = ReactDOM.createRoot(document.getElementById('app'));

// Renderize o App dentro do root
root.render(<App />);
