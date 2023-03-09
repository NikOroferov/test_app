import Link from "next/link";
import styles from "@/styles/MyLink.module.scss";

export default function MyLink({ children, path }) {
  return (
    <Link href={path} legacyBehavior>
      <a className={styles.link}>{children}</a>
    </Link>
  );
}
