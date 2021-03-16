import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { testAbilities } from './mock/abilities';
import { Abilities } from './Components/Abilities/Abilities';

function App() {
    const unitAbilitiesData = testAbilities;
    return (
        <Abilities abilities={unitAbilitiesData}></Abilities>

    );
}

export default App;
