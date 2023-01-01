import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { store, persistore } from "./redux/store";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<React.StrictMode>
  <BrowserRouter>
      <Provider store={store}>
      <PersistGate persistor={persistore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
</React.StrictMode>);


