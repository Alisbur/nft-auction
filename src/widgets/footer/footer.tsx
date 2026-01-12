import Link from "next/link";
import { FC, HTMLAttributes } from "react";

import {
  Divider,
  FOOTER_LINKS,
  Icon,
  LOGO_LINK_URL,
  LogoIcon,
  SOCIALS,
  SOCIALS_ENUM,
} from "@/shared";

import styles from "./footer.module.scss";

type TFooterProps = {} & HTMLAttributes<HTMLDivElement>;

export const Footer: FC<TFooterProps> = ({ ...props }) => {
  return (
    <footer className={styles.footer} {...props}>
      <div className={styles.wrapper}>
        <Link href={LOGO_LINK_URL} className={styles.logo}>
          <LogoIcon className={styles.logo__ico} />
          <h3 className={styles.logo__company}>DiveSea</h3>
        </Link>
        <ul className={styles.links}>
          {FOOTER_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={styles.links__item}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Divider className={styles.divider} dark />
        <div className={styles.copyright}>
          <p className={styles.copyright_full}>
            © {new Date().getFullYear()} DiveSea All Rights Reserved.
          </p>
          <p className={styles.copyright_short}>© {new Date().getFullYear()}</p>
        </div>
        <ul className={styles.socials}>
          {Object.values(SOCIALS_ENUM).map((social) => (
            <li key={social}>
              <Link href={SOCIALS.find((s) => s.name === social)?.href ?? "#"}>
                <Icon name={social} className={styles.socials__item} />
              </Link>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </footer>
  );
};
