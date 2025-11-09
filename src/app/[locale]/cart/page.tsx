import CartItems from "@/features/cart/components/CartItems";
import CheckoutForm from "@/features/cart/components/CheckoutForm";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Cart() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  const { cart, checkout } = translations;

  return (
    <main className=" container m-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 padding-section ">
        <CartItems translations={cart} />
        <CheckoutForm translations={checkout} />
      </div>
    </main>
  );
}
