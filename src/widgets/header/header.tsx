import Link from "next/link";
import { FC, HTMLAttributes } from "react";

import { ConnectWalletButton, MobileMenuButton } from "@/features";
import { Divider, HEADER_LINKS, LOGO_LINK_URL, LogoIcon } from "@/shared";
import PageWrapperWithZoom from "@/shared/ui/page-wrapper-with-zoom/page-wrapper-with-zoom";

import styles from "./header.module.scss";

type THeaderProps = {} & HTMLAttributes<HTMLDivElement>;

export const Header: FC<THeaderProps> = ({ ...props }) => {
  return (
    <header className={styles.header} {...props}>
      <PageWrapperWithZoom>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <Link href={LOGO_LINK_URL} className={styles.logo}>
                <LogoIcon className={styles.logo__ico} />
                <h3 className={styles.logo__company}>DiveSea</h3>
              </Link>
              <ul className={styles.links}>
                {HEADER_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={styles.links__item}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.action}>
              <ConnectWalletButton />
            </div>
            <div className={styles.mobileMenuControls}>
              <MobileMenuButton />
            </div>
          </div>
          <Divider className={styles.divider} />
        </div>
      </PageWrapperWithZoom>
    </header>
  );
};
