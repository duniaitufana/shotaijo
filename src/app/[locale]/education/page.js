import Footer from "@/app/components/Footer/footer";
import Navbar from "@/app/components/Navbar/navbar";
import Styles from "./page.module.css";
import Link from "next/link";

export default function Education() {
  return (
    <>
      <Navbar />
      <main>
        <div className={Styles.container}>
          <h1 className={Styles.title}>Indahnya berbagi</h1>
        </div>
        <div className={Styles.containerTwo}>
          <p className={Styles.description}>
            Pernah gak kamu ngerasa bingung pas belajar sesuatu yang baru? Harus
            mulai dari mana, ya? Susah gak ya? pas nyari materinya malah bingung
            karena banyak banget pilihannya. Nah dulu aku juga gitu, aku gak tau
            harus mulai dari mana, jadi aku bikin website ini buat ngebantu kamu
            lebih mudah dalam belajar. So enjoy ya!
          </p>
        </div>
        <div className={Styles.containerThree}>
          <div className={Styles.containerThreeMain}>
            <div className={Styles.ImageCode}>
              <img
                src="/Images/Education/Hero/Code/CodeEduHero.png"
                alt="Descriptive Alt Text"
              />
            </div>
            <div className={Styles.subMain}>
              <h2>Belajar bikin website dari nol sampe mahir</h2>
              <p>
                Karena banyak banget yang harus dipelajari, aku bikin website
                ini untuk ngebantu kamu belajar dengan cara yang lebih mudah dan
                menyenangkan. Kita bakal mulai dari dasar-dasar seperti apa sih
                HTML, CSS, dan JavaScript itu, sampai ke konsep yang lebih
                kompleks seperti framework dan library yang sering dipakai di
                dunia industri.
              </p>

              <Link
                href="/id/Education/Beginner/Code/HTML"
                className={Styles.GetStartedBtn}
              >
                Yuk Mulai!
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
