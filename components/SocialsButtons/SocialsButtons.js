import styles from '@/styles/SocialsButtons.module.css'

const SocialsButtons = () => {
  return ( 
    <div className={styles.socialsButtonsContainer}>
          <a href="https://twitter.com/i/communities/1506791013343408131" target="_blank">
            <button className={styles.socialsButton}>Twitter Community</button>
          </a>
          <a href="https://twitter.com/ULTRAGROUNDTHIS" target="_blank">
            <button className={styles.socialsButton}>@ULTRAGROUNDTHIS</button>
          </a>
          <a href="https://www.instagram.com/ultragroundthis" target="_blank">
            <button className={styles.socialsButton}>Instagram</button>
          </a>
          <a href="https://www.youtube.com/@UltraxGround" target="_blank">
            <button className={styles.socialsButton}>Youtube</button>
          </a>
    </div>
   );
}
 
export default SocialsButtons;