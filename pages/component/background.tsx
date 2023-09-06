// components/Background.jsx
import styles from './background.module.css';

function Background() {
  return (
    <div className={styles.background}>
      <img src="/images/stars.jpg" alt="夜空の写真" className={styles.starsImage} />
    </div>
  );
}

export default Background;
