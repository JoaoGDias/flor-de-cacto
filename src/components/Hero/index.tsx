import Image from 'next/image';
import styles from './Hero.module.scss'
import Link from 'next/link';

export default function Hero() {
    return (
        <main className={styles.banner}>
            <div className={styles.banner__txt}>
                <p>Novidades chegando...</p>
                <h1>Um inverno com muita elegância</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                <Link href="/" className={`${styles.btn}`}>Saiba Mais</Link>
            </div>
            
            <div className='relative w-50 h-full'>
                <Image fill={true} objectFit='cover' src="/banner-img.webp" alt="Um inverno com muita elegância" />
            </div>
                
        </main>
    )
}