import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NewNoteInput } from './NewNoteInput';

function App() {
  return (
    <div className="App">
        <NewNoteInput addNote={alert}/>
        <hr />
        <ul>
          <li>Some Note</li>
        </ul>
    </div>
  );
}

export default App;
