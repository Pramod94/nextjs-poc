import styles from "./header.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { NavLink } from "../navLink";

// By default all the components in Nextjs are Server components, Hence react specific features
// such as UseState() and some event handlers won't work in those Server components
// So we have to use 'use client' at the top of the file in order to make it Client component
export default function MainHeader() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        {/* Make use of Image from next while rendering images. This helps to lazy load images
        and comes with lot of props which helps to optimize the images while rendering the page 
        priority will helps to load image on priority
        */}
        <Image src={logo} width={100} height={100} alt="logo" priority />
        <h1>Next Level Food...!!!</h1>
      </div>

      <div className={styles.linkWrapper}>
        <NavLink href="/meals">Browse Meals</NavLink>
        <NavLink href={"/community"}>Community</NavLink>
      </div>
    </div>
  );
}
