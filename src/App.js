import './App.css';
import Navbar from './Components/Navbar';
import Theory from './Components/Theory';
import Stack from './Components/Stack';
import Welcome from './Components/Welcome';
import ProjectDesc from './Components/ProjectDesc';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Theory/>
      <ProjectDesc/>
      <Stack/>
    </div>
  );
}

export default App;

































{/* <div className="App">
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
        >
          Learn React
        </a>
      </header>
    </div> */}