import Background from '@/src/components/background';
import React, { useState } from 'react';
import Link from 'next/link';
import BirthdateInput from 'src/components/birthdayInput';
import classes from 'src/pages/inputInfo.module.css';
import Button from 'src/components/button';

export default function Home() {

  const [birthdate, setBirthdate] = useState('');

  return (
    <div className={classes.container}>
      <Background />
      <h1>情報を入力してください</h1>
      <BirthdateInput onBirthdateChange={setBirthdate} />
      <Link href={`/results?birthdate=${birthdate}`}>
        <Button label="結果" />
      </Link>
    </div>
  )
}
