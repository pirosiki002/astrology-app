// import Link from 'next/link';
import styles from './index.module.css';
import Background from '@/src/components/background';
import React, { useState } from 'react';
import Link from 'next/link';
import BirthdateInput from 'src/components/birthdayInput';

// const InputInfo: React.FC = () => {
export default function Home() {

  const [birthdate, setBirthdate] = useState('');

  return (
    <div className={styles.container}>
      <Background />
      <h1>情報入力</h1>
      <BirthdateInput onBirthdateChange={setBirthdate} />
      <Link href={`/results?birthdate=${birthdate}`}>
        <button disabled={!birthdate}>結果</button>
      </Link>
    </div>
  )
}
