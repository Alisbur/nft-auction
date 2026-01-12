import { RootState } from "@/app/providers/store-provider";

export const selectMobileMenuIsOpen = (state: RootState) => state.mobileMenu.isOpen;
