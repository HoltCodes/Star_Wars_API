import './App.css';
import Form from './Components/Form';
import { Router } from  "@reach/router"
import People from './Components/People';

function App() {
  return (
    <div className="App">
      <Form/>
      <Router>
        <People path="/people/:id" />
      </Router>
    </div>
  );
}

export default App;
