import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
    return (
        <div>
          {[{name: 'name'}, {name: 'new name'}, {name: 'some name'}].map((data) => (
              <Button variant="contained" color="primary" disableElevation>Disable elevation{data.name}</Button>
          ))}
        </div>

    );
}

export default App;
