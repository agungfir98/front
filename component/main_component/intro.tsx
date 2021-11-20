import styles from "../../styles/Home.module.css";

export default function Intro() {
  return (
    <div className="d-flex container mt-5 pt-5 pb-5">
      <div className="mt-5">
        <p className={styles.intro}>Halo, nama saya:</p>
        <h1 className={styles.namaku}>Agung Firmansyah</h1>
        <div className={styles.desc}>
          <p className=" fs-6">
            Seorang fresh graduate bergelar Sarjana Teknik Elektro dari Universitas
            Jenderal Soedirman. Pribadi yang memiliki banyak cita cita seperti
            menjadi seorang rekayasawan perangkat lunak, data analis, dan
            astronom.
          </p>
        </div>
      </div>
    </div>
  );
}
