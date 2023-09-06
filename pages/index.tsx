import Link from 'next/link';
import styles from './index.module.css';
import Background from './component/Background';

export default function Home() {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>星占い</h1>
        <div className={styles.buttonContainer}>
          <Link href="/input-info" className={styles.startButton}>
            スタート
          </Link>
        </div>
      </div>
    </div>
  );
}
