import CartItems from "@/features/cart/components/CartItems";
import CheckoutForm from "@/features/cart/components/CheckoutForm";

export default function Cart() {
  return (
    <main className=" container m-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 padding-section ">
        <CartItems />
        <CheckoutForm />
      </div>
    </main>
  );
}
