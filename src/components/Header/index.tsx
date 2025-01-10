'use client';
import { useEffect, useState } from "react";
import { FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import style from '@/components/Header/Header.module.scss'
import Link from "next/link";

export default function Header() {
    const [showMnuMob, setShowMnuMob] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); // Ajuste o valor conforme necessário
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    

    function showMenuOnMobile() {
        !showMnuMob ? setShowMnuMob(true) : setShowMnuMob(false);
    }

    return (
        <header className={`${style.header} ${isSticky ? style.fixed : ''}`}>
            <div className="container">
                <nav>
                    <Link href="/" className={style.logo}>
                        <Image src="/logo-flor-de-cacto.png" width={139} height={60} alt="Imagem da logo da loja - Flor de cacto" />
                    </Link> 
                    <ul className={`${style.menuList} ${showMnuMob ? style.active : ''}`}>
                        <li><Link href="/" className={style.active}>Início</Link></li>
                        <li><Link href="/">A Flor de Cacto</Link></li>
                        <li><Link href="/">Roupas</Link></li>
                        <li><Link href="/">Acessórios</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/"><FaUser size="24" /></Link></li>
                    </ul>

                    <div className={style.userActions}>
                        <Link href="/">
                            <FaUser size="24" />
                        </Link>
                        <Link href="/cart">
                            <FaShoppingBag size="24" />
                        </Link>
                    </div>

                    <button type="button" className={`actMobMeunu ${style.mobMenu}`} onClick={showMenuOnMobile}>                    
                        <FaBars size="24" className={`${!showMnuMob ? style.show : ''}`} />
                        <FaTimes size="24" className={`${showMnuMob ? style.show : ''}`}  />
                    </button>
                </nav>
            </div>
        </header>
    )
}