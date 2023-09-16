// pages/results.tsx
import { useRouter } from "next/router";
import classes from "src/pages/results.module.css";
import Background from "src/components/background";
import TransparentBox from "../components/transparent/transparentBox";
import Button from "../components/button";
import Link from "next/link";
// import horoscopeData from "../../data.json";
import { useEffect, useState } from "react";

type ZodiacSigns =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

type HoroscopeDetail = {
  description: string;
  color: string;
  compatibility: string;
  lucky_number: string;
  lucky_time: string;
  mood: string;
};

type HoroscopeData = {
  [key in ZodiacSigns]: {
    [date: string]: HoroscopeDetail;
  };
};

const horoscopeData: HoroscopeData = require("../../data.json");

const Results: React.FC = () => {
  const router = useRouter();
  const birthdate = router.query.birthdate as string;
  const [todayHoroscope, setTodayHoroscope] = useState<any>(null);
  const zodiacSign = determineZodiac(birthdate) as ZodiacSigns;

  useEffect(() => {
    const birthdate = router.query.birthdate as string;

    // birthdateが存在する場合のみ以下の処理を実行する
    if (!birthdate) return;

    const zodiacSign = determineZodiac(birthdate) as ZodiacSigns;
    const today = new Date().toISOString().split("T")[0];
    const [year, month, day] = today.split("-").map((str) => parseInt(str, 10));
    // const formattedDate = `${month}-${day}-${year}`;
    const formattedDate = `${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}-${year}`;
    const horoscopeDetails = horoscopeData[zodiacSign]?.[formattedDate];

    if (horoscopeDetails) {
      setTodayHoroscope(horoscopeDetails);
    } else {
      console.log(
        "Horoscope details not found for:",
        zodiacSign,
        formattedDate
      );
    }
    console.log("birthdate:", birthdate);
    console.log("zodiacSign:", zodiacSign);
    console.log("formattedDate:", formattedDate);
    console.log("horoscopeDetails:", horoscopeDetails);
  }, [router.query]);

  // Results component
  if (!birthdate) {
    // preventDefaultで防いでいるため、ここの処理は基本通らない。
    return (
      <div className={classes.container}>
        <Background />
        <TransparentBox>
          <h1 className={classes.title}>エラー</h1>
          <p className={classes.text}>生年月日が入力されていません。</p>
          <Link href="/">
            <Button label="トップへ戻る" className={classes.buttonSpace} />
          </Link>
        </TransparentBox>
      </div>
    );
  }

  // 星座を求める関数
  function determineZodiac(date: string): ZodiacSigns {
    if (!date) throw new Error("Date is not provided");
    const [year, month, day] = date.split("-").map((str) => parseInt(str, 10));

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
      return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
      return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21))
      return "Gemini";
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22))
      return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
      return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23))
      return "Libra";
    if ((month === 10 && day >= 24) || (month === 11 && day <= 22))
      return "Scorpio";
    if ((month === 11 && day >= 23) || (month === 12 && day <= 21))
      return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
      return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
      return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
      return "Pisces";

    throw new Error("Invalid date"); // もし範囲外の日付が入力された場合
  }

  return (
    <div className={classes.container}>
      <Background />
      <TransparentBox>
        <h1 className={classes.title}>結果</h1>
        <p className={classes.text}>入力された生年月日:</p>
        <p className={classes.text}>{birthdate}</p>
        <p className={classes.text}>あなたの星座は:</p>
        <p className={classes.text}>{zodiacSign}</p>
        {console.log("todayHoroscope=", todayHoroscope)}
        {todayHoroscope && (
          <>
            <p className={classes.text}>今日の予報:</p>
            <p className={classes.detailText}>{todayHoroscope.description}</p>
            <p className={classes.text}>
              ラッキーカラー: {todayHoroscope.color}
            </p>
            <p className={classes.text}>
              相性の良い星座: {todayHoroscope.compatibility}
            </p>
            {/* ... 他の詳細も表示可能 */}
          </>
        )}
        <div className={classes.buttonSpace}>
          <Link href="/">
            <Button label="トップへ戻る" />
          </Link>
        </div>
      </TransparentBox>
    </div>
  );
};

export default Results;
