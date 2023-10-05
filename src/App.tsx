import './App.css';

import {MyButton} from './components/index'

function App() {
  return (
    <div className="App">
      <MyButton title="hi" disabled={false}/>
    </div>
  );
}

export default App;
