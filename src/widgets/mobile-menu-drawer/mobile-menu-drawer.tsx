"use client";

import Link from "next/link";

import { ConnectWalletButton, useMobileMenu } from "@/features";
import { Drawer, HEADER_LINKS, Icon, SOCIALS, SOCIALS_ENUM } from "@/shared";

import styles from "./mobile-menu-drawer.module.scss";

const DESKTOP_BREAKPOINT = 800;

export const MobileMenuDrawer = () => {
  const { isOpen, close } = useMobileMenu();

  return (
    <Drawer isOpen={isOpen} onClose={close} closeBreakpoint={DESKTOP_BREAKPOINT}>
      <section className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul className={styles.nav__links}>
            {HEADER_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul className={styles.nav__socials}>
            {Object.values(SOCIALS_ENUM).map((social) => (
              <li key={social}>
                <Link href={SOCIALS.find((s) => s.name === social)?.href ?? "#"}>
                  <Icon name={social} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isOpen && (
          <div className={styles.action}>
            <ConnectWalletButton variant={"drawer"} />
          </div>
        )}
      </section>
    </Drawer>
  );
};
