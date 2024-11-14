import Image from 'next/image';
import styles from './Hero.module.scss';
import Button from '@/components/Button';

export default function Hero() {
    return (
        <main className={styles.banner}>
            <div className={styles.banner__txt}>
                <p>Novidades chegando...</p>
                <h1>Um inverno com muita elegância</h1>
                <Button url={"/"} text={"Saiba mais"} />
            </div>
            
            <div className='absolute top-0 left-0 w-full h-full xl:w-3/6 xl:relative'>
                <Image fill={true} objectFit='cover' src="/banner-img.webp" alt="Um inverno com muita elegância" />
            </div>
                
        </main>
    )
}