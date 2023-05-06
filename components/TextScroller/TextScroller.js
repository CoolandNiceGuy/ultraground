import styles from '@/styles/TextScroller.module.css';

const TextScroller = () => {
  return ( 
    <div className={styles.main}>
      <h1 className={styles.text}>IF YOU INTO <div className={styles.roller}>
        <span className={styles.rolltext}>
        SKATING<br/>
        FIGHTING<br/>
        FASHION<br/>
        MUSIC<br/>
        </span>
        </div>
      </h1>
  </div>
   );
}
 
export default TextScroller;