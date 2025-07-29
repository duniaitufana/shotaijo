import Image from "next/image";
import Styles from "./page.module.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import MWH from "./components/MWH/mwh";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className={Styles.hero}>
          <h1 className={Styles.heroTitle}>Shotaijo</h1>
          <p className={Styles.heroDescription}>
            Sharing, Learning, and Growing Together
          </p>
        </div>
        <div className={Styles.features}>
          <div className={Styles.featuresImage}>
            <img
              src="/Images/Home/features/1.png"
              loading="lazy"
              alt="Standing women"
              className={Styles.featuresImage1}
            />
          </div>
          <div className={Styles.featuresContent}>
            <h2 className={Styles.featuresTitle}>
              Kamu bisa mulai belajar apapun yang kamu inginkan tanpa perlu
              khawatir meskipun kamu tidak memiliki pengetahuan sebelumnya.
            </h2>
            <p className={Styles.featuresDescription}>
              Dengan pendekatan yang tepat, kamu bisa menguasai topik baru
              dengan cepat dan efektif. Kami menyediakan materi pembelajaran
              yang terstruktur dan mudah diikuti, sehingga kamu bisa belajar
              dengan mudah.
            </p>
            <span>
              <svg
                className={Styles.featuresIcon}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
              >
                <defs></defs>
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  sketchtype="MSPage"
                >
                  <g
                    sketchtype="MSLayerGroup"
                    transform="translate(-310.000000, -1089.000000)"
                    fill="#000000"
                  >
                    <path
                      d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                      sketchtype="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div className={Styles.featuresTwo}>
          <div className={Styles.featuresContentTwo}>
            <h2 className={Styles.featuresTitleTwo}>
              Suka main games ? Mau tau lebih banyak tentang games ? Tenang aja,
              kamu bisa explore lebih banyak di artikel yang kami buat.
            </h2>
            <p className={Styles.featuresDescriptionTwo}>
              Temukan berbagai artikel menarik seputar game dan tingkatkan
              pengetahuanmu.
            </p>
            <span>
              <svg
                className={Styles.featuresIcon}
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
              >
                <defs></defs>
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  sketchtype="MSPage"
                >
                  <g
                    sketchtype="MSLayerGroup"
                    transform="translate(-310.000000, -1089.000000)"
                    fill="#000000"
                  >
                    <path
                      d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                      sketchtype="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div className={Styles.featuresImageTwo}>
            <img
              src="/Images/Home/features/2.png"
              loading="lazy"
              alt="Standing women"
              className={Styles.featuresImage2}
            />
          </div>
        </div>
      </main>
      <MWH />
      <Footer />
    </>
  );
}
