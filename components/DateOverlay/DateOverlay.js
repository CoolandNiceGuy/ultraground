import styles from '@/styles/DateOverlay.module.css'

const DateOverlay = () => {
  const date = new Date().toJSON().slice(0,10).replace(/-/g,'.');
  return ( 
    <div className={styles.dateOverlay}>
      {date}
    </div>
   );
}
 
export default DateOverlay;