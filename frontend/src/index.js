import React, {Suspense} from 'react';
import App from "./App"
import "./index.css"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

 
root.render(
  <Suspense fallback={<p>Loading...</p>}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
        </BrowserRouter>
    
    </React.StrictMode>
    </Suspense>);

