import Link from "../link/Link";
import Navbar from "./Navbar";
import CartButton from "./cart-button";
import LanguageSwitcher from "./language-switcher";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Header() {
 const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${locale}`}
          className="text-primary font-semibold text-2xl"
        >
           {translations.logo}
        </Link>
      
        <div className="flex items-center gap-6 flex-1 justify-end">
            <Navbar translations={translations} />
          <LanguageSwitcher />
          <CartButton />
        </div>
      </div>
    </header>
  );
}

