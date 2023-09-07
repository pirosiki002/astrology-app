// components/BirthdateInput.tsx
import classes from "src/components/birthdayInput/birthdayinput.module.css";

import React, { useState } from 'react';

const BirthdateInput: React.FC<{ onBirthdateChange: (birthdate: string) => void }> = ({ onBirthdateChange }) => {
  const [birthdate, setBirthdate] = useState('');

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="birthdate">生年月日:</label>
      <input
        className={classes.input}
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => {
          setBirthdate(e.target.value);
          onBirthdateChange(e.target.value);
        }}
      />
    </div>
  );
};

export default BirthdateInput;
