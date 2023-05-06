import styles from '@/styles/SocialsTray.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialsTray = () => {
  return ( 
    <div className={styles.socialsTray}>
        <a href="https://twitter.com/ULTRAGROUNDTHIS"><FontAwesomeIcon icon={faTwitter}/></a>
        <a href="https://www.instagram.com/ultragroundthis/"><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="https://www.youtube.com/@UltraxGround"><FontAwesomeIcon icon={faYoutube}/></a>
    </div>
   );
}
 
export default SocialsTray;