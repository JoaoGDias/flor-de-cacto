import Link from 'next/link';
import styles from '@/components/Button/Button.module.scss';

interface ButtonProps {
    url : string, 
    text : string,
}

export default function Button( { url, text }: ButtonProps) {
    return(
        <Link href={url} className={`${styles.btn}`}>{text}</Link>
    )
}