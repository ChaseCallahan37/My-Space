import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { SignInButton, SignOutButton } from "@/components/Buttons";

export default function NavMenu() {
  return (
    <nav className={styles.headerNav}>
      <Link href="/" className={styles.headerLogoLink}>
        <div className={styles.headerLogoContainer}>
          <Image
            src={"/logo.png"}
            alt="Site logo"
            className={styles.headerLogo}
            height={64}
            width={64}
          />
        </div>
      </Link>
      <ul className={styles.headerLinkList}>
        <li>
          <Link className={styles.headerLink} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} href="/users">
            Users
          </Link>
        </li>
        <li>
          <SignInButton className={styles.headerLink} />
        </li>
        <li>
          <SignOutButton className={styles.headerLink} />
        </li>
      </ul>
    </nav>
  );
}
