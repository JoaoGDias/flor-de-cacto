import Image from 'next/image';
import styles from '@/components/Infos/Infos.module.scss';

export default function Infos() {
    return (
        <div className={styles.buyInfos}>
            <ul>
                <li>
                    <Image height={40} width={40} src="/frete.png" alt="Frete Grátis" />
                    <p><strong>Frete Grátis</strong>Para compras acima de R$ 200,00</p>
                </li>
                <li>
                    <Image height={40} width={40} src="/credit-card.png" alt="Tudo em até 3 vezes" />
                    <p><strong>Tudo em até 3X</strong>Parcele em até 3 X sem juros</p>
                </li>
                <li>
                    <Image height={40} width={40} src="/seguranca.png" alt="Compra Segura" />
                    <p><strong>Compra Segura</strong>Você está em boas mãos</p>
                </li>
            </ul>
        </div>
    )
}