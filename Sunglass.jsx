import React from 'react';
import "./Sunglass.css"
import Watch from '../Watch/Watch';
// import add from '../../Utils/Calculet';
// import Calculetor from '../../Utils/Calculet';
import { add, multiply } from '../../Utils/Calculet';
const Sunglass = () => {
    const Sunglass = () => {
        const first = 55;
        const secound = 59;
        const sum = add(first, secound)
        const multiply = multiply(first, secound)
    }
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;
