import React, { useState } from "react";
import { letters, numbers, symbols } from "./constants";
import "./App.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let characters = letters;
    if (includeNumbers) {
      characters = characters + numbers;
    }
    if (includeSymbols) {
      characters = characters + symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword = generatedPassword + characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const onChangeSymbols = (e) => {
    setIncludeSymbols(e.target.checked);
  };

  const onChangeNumbers = (e) => {
    setIncludeNumbers(e.target.checked);
  };

  const onChangeLength = (e) => {
    setLength(Number(e.target.value));
  };

  return (
    <div className="password-generator-block">
      <div className="password-generator-holder">
        <h1>Password Generator</h1>
        <div className="length-block">
          <label>
            Length:
            <input
              type="number"
              value={length}
              onChange={onChangeLength}
              min="1"
            />
          </label>
        </div>
        <div className="number-symbol-block">
          <div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={onChangeNumbers}
              />
              <span className="checkmark">&nbsp;</span>
              Include Numbers:
            </label>
          </div>
          <div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={onChangeSymbols}
              />
              <span className="checkmark">&nbsp;</span>
              Include Symbols:
            </label>
          </div>
        </div>
        <button onClick={generatePassword} className="btn">
          Generate Password
        </button>
        <div className="password-block">
          <h3>Your Password</h3>
          <span className="password">{password}</span>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
