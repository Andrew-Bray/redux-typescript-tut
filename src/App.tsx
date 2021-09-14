import React from 'react';
import './App.css';
import { NewNoteInput } from './NewNoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './notesReducer';

function App() {
  const notes = useSelector<NotesState,NotesState['notes'] >(state => state.notes);
  const dispatch = useDispatch()

  const addNote = (note:string) => {
    dispatch({type: "ADD_NOTE", payload: note})
  }
  return (
    <div className="App">
        <NewNoteInput addNote={addNote}/>
        <hr />
        <ul>
          {notes.map((note, i) => {
            return (
            <li key={i}>{note}</li>
          )})}
        </ul>
    </div>
  );
}

export default App;
