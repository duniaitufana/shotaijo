import Styles from "./page.module.css";

export default function EducationOptions() {
  return (
    <>
      <section className={Styles.ContainerOptionBeginner}>
        <h1 className={Styles.Title}>Pemula</h1>
        <p className={Styles.Description}>
          Explore various educational paths and opportunities available to you.
        </p>
        <a href="#">Pelajari selengkapnya </a>
      </section>
      <section className={Styles.ContainerOptionIntermediate}>
        <h1 className={Styles.Title}>Menengah</h1>
        <p className={Styles.Description}>
          Explore various educational paths and opportunities available to you.
        </p>
        <a href="#">Pelajari selengkapnya </a>
      </section>

      <section className={Styles.ContainerOptionAdvanced}>
        <h1 className={Styles.Title}>Tingkat lanjutan</h1>
        <p className={Styles.Description}>
          Explore various educational paths and opportunities available to you.
        </p>
        <a href="#">Pelajari selengkapnya </a>
      </section>
    </>
  );
}
