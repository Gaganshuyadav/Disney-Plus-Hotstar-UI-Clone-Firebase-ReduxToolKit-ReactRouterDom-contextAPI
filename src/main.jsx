import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { FirebaseProvider } from './Context/Firebase.jsx';
import { BrowserRouter } from 'react-router-dom'
import { Provider} from "react-redux";
import store from './features/store.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
     <Provider store={ store}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
     </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
)
