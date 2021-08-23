import './App.css';

import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <div className="background">
        <h1 className="title=header">Chuck Norris jokes generator</h1>         
        <div className="content">
          <Joke />
        </div>
      </div>
    </div>
  );
}

export default App;
