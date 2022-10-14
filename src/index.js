import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context'
import { CartProvider } from './contexts/cart.context';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter will contorl the routing inside our component */}
    <BrowserRouter>
      <UserProvider>
        {/* ProductsProvider is located inside UserProvider in case we want to filter the products by region or anything else based on the user profile, because there is a chance that we might need to use the data from UserProvider inside out ProductsProvider */}
        <CategoriesProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
