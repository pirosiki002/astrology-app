// pages/results.tsx
import { useRouter } from 'next/router';

const Results: React.FC = () => {
  const router = useRouter();
  const birthdate = router.query.birthdate;

  // 実際の結果ロジックはここに追加できます

  return (
    <div>
      <h1>結果</h1>
      <p>入力された生年月日: {birthdate}</p>
    </div>
  );
};

export default Results;
