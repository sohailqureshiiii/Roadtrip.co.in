import Image from "next/image";
import Homepage from "../pages/homepage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homepage />
    </div>
  );
}
