import Link from "next/link";
import style from '@/components/Newsletter/Newsletter.module.scss'

export default function Newsletter() {
    return (
        <div className={style.newsletter}>
            <h3>Quer ficar por dentro de todas as novidades?</h3>
            <form action="">
                <input type="mail" placeholder="Seu e-mail" /><button type="button">Enviar</button>
            </form>
            <p className="text-center text-xs text-gray-400">Ao assinar nossa newsletter você concorda com nossos<Link href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Termos de uso</Link> e <Link href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Políticas de privacidade</Link>.</p>
        </div>
    )
}