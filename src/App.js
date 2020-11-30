import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Hello & Welcome to Amplified React App !
        </p>
        <a
          className="App-link"
          href="https://docs.amplify.aws/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Amplify
        </a>
      </header>
    </div>
  );
}

export default App;
