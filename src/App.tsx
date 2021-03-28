import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { testAbilities } from './mock/abilities';
import { Abilities } from './Components/Abilities/Abilities';
import { Wargear } from './Components/Wargear/Wargear';
import { wargear } from './mock/wargear';

function App() {
    const unitAbilitiesData = testAbilities;
    return (
        <Abilities abilities={unitAbilitiesData}></Abilities>

    );
}

export default App;
