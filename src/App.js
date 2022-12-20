import logo from './logo.svg';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id="tooltip-anchor"
        >
          Learn React
        </a>
        <Tooltip anchorId="tooltip-anchor" content="Test Tooltip" />
      </header>
    </div>
  );
}

export default App;
