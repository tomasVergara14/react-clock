import './App.css';
import Hours from './Components/Hours/Hours';
import Minutes from './Components/Minutes/Minutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hours/>
       <p>:</p>
       <Minutes/>
      </header>
    </div>
  );
}

export default App;
