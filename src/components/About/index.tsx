import Image from "next/image";
import style from './About.module.scss';

export default function About () {
    return(
        <section className={style.about}>
            <div className="container">
                <div className={style.about__info}>
                    <div className={style.about__info_img}>
                        <Image src="/about-img.jpg" alt="" width="290" height="600" />
                        <Image src="/about-img-2.png" alt="" width="290" height="600" />
                    </div>
                    <div className={style.about__info_txt}>
                        <span>A Flor de Cacto</span>
                        <h1>Moda clássica, versátil e atemporal com aquele toque de modernidade.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptate, sed error blanditiis accusantium quisquam, animi ut doloremque, quam amet natus? Sed in debitis aut distinctio porro rem enim fugiat?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}