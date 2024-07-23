import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>
        {/* If we use <a> tag page will always refreshes, then it will no longer be a single page app */}
        {/* <a href="./about">Go to About page</a> */}

        {/* With the Link from next js, now we don't see the page refresh */}
      </h3>

      <ul>
        <li>
          <Link href="./about">Go to About page</Link>
        </li>

        <li>
          <Link href={"./meals/share"}>Meals Share</Link>
        </li>
      </ul>
    </main>
  );
}
