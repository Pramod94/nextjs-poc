"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./mainHeader/header.module.css";

export const NavLink = ({ href, children }) => {
  // usePathname() will get us the path name which we are into
  const path = usePathname();
  console.log("path", path);
  return (
    <Link
      href={href}
      className={
        path === href ? `${styles.links} ${styles.active}` : styles.links
      }
    >
      {children}
    </Link>
  );
};
