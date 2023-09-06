// components/BirthdateInput.tsx

import React, { useState } from 'react';

const BirthdateInput: React.FC<{ onBirthdateChange: (birthdate: string) => void }> = ({ onBirthdateChange }) => {
  const [birthdate, setBirthdate] = useState('');

  return (
    <div>
      <label htmlFor="birthdate">生年月日:</label>
      <input
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
