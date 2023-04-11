import React from 'react';

import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { StoreProvider } from './context/Storecontext';
import { FilterContextProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const DOMAIN= process.env.REACT_APP_DOMAIN
// const CLIENTID = process.env.REACT_APP_ID
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <StoreProvider>
    <FilterContextProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </FilterContextProvider>

  </StoreProvider>

  </Auth0Provider>
);

