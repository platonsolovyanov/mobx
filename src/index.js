import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DevTools from 'mobx-react-devtools'

function App() {
  return (
    <div className="App">
      <DevTools />
      <h1>Hello world!</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
