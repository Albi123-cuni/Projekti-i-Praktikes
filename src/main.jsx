import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider options={{ "client-id": "AXTiYoG810Hc6NjfL86yT1aZ-glGp-c7HKC-cKkFWH-APmcsyC2_yCfIVirpyvqmhFuKtiqlR7zBln-d",  currency: "USD",}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>

);
