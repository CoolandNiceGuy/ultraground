import Image from 'next/image'
import styles from '@/styles/page.module.css'
import SocialsButtons from '@/components/SocialsButtons/SocialsButtons'
import DateOverlay from '@/components/DateOverlay/DateOverlay'
import UltragroundLogo from '@/public/ultragroundLogo.jpeg'
import UltraDescription from '@/components/UltraDescription/UltraDescription'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <DateOverlay/>
        <Image
          src={UltragroundLogo}
          alt="ultraground logo"
          className={styles.logoImage}
          fill={false}
        />
        <SocialsButtons/>
      </div>
      <UltraDescription/>
    </main>
  )
}
