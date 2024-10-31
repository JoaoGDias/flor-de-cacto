import Link from "next/link";
import Image from "next/image";
import Styles from "@/components/Footer/styles.module.scss"

export default function Footer() {
    return(
        <footer className={Styles.footer}>
        <div className={Styles.container}>
            <div className={Styles.ftr}>
                <div className={Styles.ftr__logo}>
                    <Link href="/modaflordecacto" className={Styles.logo}>
                        <Image width={185} height={80} src="/logo-flor-de-cacto.png" alt="logo flor de cacto"/>
                    </Link>

                    <ul>
                        <li>
                            <Link href="https://www.facebook.com/moda.flordecacto" target="_blank">
                                <Image width={30} height={30} src="/facebook.png" alt="Ícone Facebook"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/moda.flordecacto/" target="_blank">
                                <Image width={30} height={30} src="/instagram.png" alt="Ícone Instagram"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://Linkpi.whatsapp.com/send/?phone=5512974097538&text&type=phone_number&app_absent=0" target="_blank">
                                <Image width={30} height={30} src="/whatsapp.png" alt="Ícone WhatsApp"/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={Styles.ftr__wrap}>
                    <div className={Styles.ftr__mnu}>
                        <h4>Loja</h4>
                        <ul>
                            <li><Link href="#">Minha conta</Link></li>
                            <li><Link href="#">Lançamentos</Link></li>
                            <li><Link href="#">Roupas</Link></li>
                            <li><Link href="#">Acessórios</Link></li>
                            <li><Link href="#">Promoção</Link></li>
                        </ul>
                    </div>
                    <div className={Styles.ftr__mnu}>
                        <h4>Institucional</h4>
                        <ul>
                            <li><Link href="#">Sobre nós</Link></li>
                            <li><Link href="/blog.html">Blog</Link></li>
                            <li><Link href="#">Termos e condições</Link></li>
                            <li><Link href="#">Trocas e devoluções</Link></li>
                            <li><Link href="#">Perguntas frequentes</Link></li>
                        </ul>
                    </div>
                    <div className={Styles.ftr__mnu}>
                        <h4>Contato</h4>
                        <ul>
                            <li><Link href="#">moda.flordecactus@gmail.com</Link></li>
                            <li><Link href="#">(12) 99999-9999</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className={Styles.copyright}>
            <div className={Styles.container}>
                <p>© 2024 Todos os direitos reservados</p>
            </div>
        </div>
      </footer>
    )
}