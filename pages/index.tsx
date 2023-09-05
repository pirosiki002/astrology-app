import Link from 'next/link';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="/images/stars.jpg" alt="夜空の写真" className={styles.starsImage} />
      </div>

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
