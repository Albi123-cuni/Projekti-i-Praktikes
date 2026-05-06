import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider options={{ "client-id": "AcYRwZDbMnS9McXVFopvpKYMKF5VUkPUtAA4XyOVPNfF-DlMbP79OJu4vK-MXi77eoU6L1K5REqOOUBn"}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>

);