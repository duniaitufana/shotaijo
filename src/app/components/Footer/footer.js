import Styles from "./footer.module.css";

export default function Footer(params) {
  return (
    <footer className={Styles.footer}>
      <div>
        <h6 className={Styles.Moto}>
          <span className={Styles.highlight}>Shotaijo</span> is
        </h6>
        <span className={Styles.Moto2}>Everything</span>
        <p className={Styles.footerText}>
          © {new Date().getFullYear()} - shotaijo.com
        </p>
      </div>
      <div className={Styles.footerEmailContainer}>
        <p className={Styles.footerEmailText}>
          Apapun saran yang kamu ingin sampaikan 😁
        </p>
        <a className={Styles.footerEmail} href="mailto:contact@shotaijo.com">
          contact@shotaijo.com
        </a>
      </div>
    </footer>
  );
}
