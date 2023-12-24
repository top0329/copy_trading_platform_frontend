import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App.jsx';
import './index.css';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
);
