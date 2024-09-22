import React, { useState } from 'react';
import { add } from '../utils/add'; // import the add function

const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(`Result: ${sum}`);
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div className="container">
            <h1>String Calculator</h1>
            <textarea
                type="text"
                value={input}
                className="input-box"
                placeholder="Enter numbers (e.g. 1,2,3)"
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleCalculate} className="calculate-btn">
                Calculate
            </button>
            <div className="result">
                <h2>{result}</h2>
            </div>
        </div>
    );
};

export default StringCalculator;
