import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import appStore from './utils/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
        <App />
    </Provider>
);
        