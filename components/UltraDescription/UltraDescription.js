import styles from '@/styles/UltraDescription.module.css'
import TextScroller from '../TextScroller/TextScroller';
import moon from '@/public/bloodmoon.png'
import Image from 'next/image';

const UltraDescription = () => {
  return ( 
    <div className={styles.ultraDescription}>
      <div className={styles.copyContainer}>
        <TextScroller/>
        <p className={styles.copyContent}>OR JUST NEED SOMETHING TO STAND ON</p>
        <p className={styles.copyContent}>FUCK WITH US</p>
        <p className={styles.copyContent}>ULTRAGROUND</p>
        <Image
          src={moon}
          width={128}
          style={{marginTop:'3rem', filter: 'drop-shadow(0 0 0.75rem crimson)'}}
        />
      </div>
      <div className={styles.bloodOnNikes}>
        <p className={styles.comingSoon}>BLOOD ON MY NIKES COMING SOON</p>
      </div>
    </div>
   );
}
 
export default UltraDescription;