import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.title}>HOME-PAGE</div>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ex libero excepturi nam qui eveniet totam molestiae numquam pariatur iste commodi vitae, delectus, sapiente rem eaque reprehenderit, a optio animi!</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ex libero excepturi nam qui eveniet totam molestiae numquam pariatur iste commodi vitae, delectus, sapiente rem eaque reprehenderit, a optio animi!</p>

      <Link href='/dashboard'>
        <div className={styles.btn}>chuyen den trang DASHBOARD</div>
      </Link>

    </div>
  );
}