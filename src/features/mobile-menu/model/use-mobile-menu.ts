import { useAppDispatch, useAppSelector } from "@/shared";

import { mobileMenuActions } from "./mobile-menu-slice";
import { selectMobileMenuIsOpen } from "./selectors";

export const useMobileMenu = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectMobileMenuIsOpen);

  const open = () => dispatch(mobileMenuActions.openMenu());
  const close = () => dispatch(mobileMenuActions.closeMenu());
  const toggle = () => dispatch(mobileMenuActions.toggleMenu());

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
