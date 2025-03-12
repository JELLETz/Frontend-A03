import styles from './banner.module.css';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className={styles.Banner}>
        <Image src={'/img/venue.jpg'} alt='cover' fill={true}  objectFit='cover'/>
        <div className={styles.BannerText}>
            <h1>where every event finds its venue</h1>
            <h3>Finding the perfect venue has never been easier. Whether It's a wedding, corperate event, or private party, we connecting people to the perfect place.</h3>
        </div>
    </div>

  )
}