// pages/results.tsx
import { useRouter } from 'next/router';
import classes from 'src/pages/results.module.css';
import Background from 'src/components/background';
import TransparentBox from '../components/transparent/transparentBox';

const Results: React.FC = () => {
  const router = useRouter();
  const birthdate = router.query.birthdate as string | undefined;
  if(!birthdate){
    return <div>Loading...</div>;
  }

  const zodiacSign = determineZodiac(birthdate);

  // 星座を求める関数
  function determineZodiac(date: string): string {
    if (!date) return '不明な星座';
    const [year, month, day] = date.split('-').map(str => parseInt(str, 10));

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return '牡羊座';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return '牡牛座';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return '双子座';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return '蟹座';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return '獅子座';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return '乙女座';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return '天秤座';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return '蠍座';
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return '射手座';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return '山羊座';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return '水瓶座';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return '魚座';

    return '不明な星座'; // もし範囲外の日付が入力された場合
  }

  return (
    <div className={classes.container}>
      <Background />
      <TransparentBox>
        <h1 className={classes.title}>結果</h1>
        <p className={classes.text}>入力された生年月日: {birthdate}</p>
        <p className={classes.text}>あなたの星座は: {zodiacSign}</p>
      </TransparentBox>

    </div>
  );
};

export default Results;
