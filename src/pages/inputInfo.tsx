import Background from '@/src/components/background';
import React, { useState } from 'react';
import Link from 'next/link';
import BirthdateInput from 'src/components/birthdayInput';
import classes from 'src/pages/inputInfo.module.css';
import Button from 'src/components/button';
import TransparentBox from 'src/components/transparent/transparentBox';

export default function Home() {

  const [birthdate, setBirthdate] = useState('');
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`birthdate=${birthdate}`);
    if (!birthdate) {
      alert("生年月日を入力してください。");
      e.preventDefault();
      return;
    }

    // Next.jsのRouterを使用して遷移する
    // window.location.href = `/results?birthdate=${birthdate}`;
  }

  return (
    <div className={classes.container}>
      <Background />
      <TransparentBox>
        <h1 className={classes.title}>情報を入力</h1>
        <BirthdateInput onBirthdateChange={setBirthdate} />
        <div className={classes.buttonSpace}>
          <Link href={`/results?birthdate=${birthdate}`}>
            <Button label="結果" onClick={handleButtonClick}/>
          </Link>
        </div>
      </TransparentBox>
    </div>
  )
}
