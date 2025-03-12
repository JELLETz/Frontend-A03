import styles from './card.module.css';
import Image from 'next/image'

export default function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.cardimg}>
            <Image src={'/img/venue1.jpg'} alt='card image' priority fill={true} objectFit='cover'/>
        </div>
        <div className={styles.cardText}>
          <h3>
          &nbsp; &nbsp; Wedding
          </h3>
          <p>
          &nbsp; The perfect venue for your dream wedding.
          </p>
        </div>
    </div>
  )
}
