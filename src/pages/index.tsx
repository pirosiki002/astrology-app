import Link from 'next/link';
import styles from './index.module.css';
import Background from '@/src/components/background';
import TransparentBox from '../components/transparent/transparentBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Background />
      <TransparentBox>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>星占い</h1>
        <div className={styles.buttonContainer}>
          <Link href="/inputInfo" className={styles.startButton}>
            スタート
          </Link>
        </div>
      </div>
      </TransparentBox>
    </div>
  );
}
