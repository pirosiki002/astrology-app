import { useState, useEffect } from "react";
import { HoroscopeEntry } from "../types/horoscope";

const HoroscopePage = () => {
  // ステートとして占いのデータを保持
  const [horoscopeInfo, setHoroscopeInfo] = useState<HoroscopeEntry | null>(
    null
  );

  useEffect(() => {
    // サンプルとしてTaurusの03-27-2023のデータをフェッチします
    fetch("/api/horoscope?sign=Taurus&date=03-27-2023")
      .then((res) => res.json())
      .then((data) => {
        setHoroscopeInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching horoscope:", error);
      });
  }, []); // useEffectの依存配列を空にして、コンポーネントのマウント時のみ実行する

  return (
    <div>
      <h1>Horoscope for Aries on 03-27-2023</h1>
      {horoscopeInfo ? (
        <div>
          <p>
            <strong>Description:</strong> {horoscopeInfo.description}
          </p>
          <p>
            <strong>Color:</strong> {horoscopeInfo.color}
          </p>
          <p>
            <strong>Compatibility:</strong> {horoscopeInfo.compatibility}
          </p>
          <p>
            <strong>Lucky Number:</strong> {horoscopeInfo.lucky_number}
          </p>
          <p>
            <strong>Lucky Time:</strong> {horoscopeInfo.lucky_time}
          </p>
          <p>
            <strong>Mood:</strong> {horoscopeInfo.mood}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HoroscopePage;
