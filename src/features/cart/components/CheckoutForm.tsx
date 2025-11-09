"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getTotalAmount } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatters";
import { selectCartItems } from "@/Redux/features/cartSlice";
import { useAppSelector } from "@/Redux/hooks";

interface CheckoutFormProps {
  translations: {
    title: string;
    phone: string;
    phonePlaceholder: string;
    streetAddress: string;
    addressPlaceholder: string;
    postalCode: string;
    postalCodePlaceholder: string;
    city: string;
    cityPlaceholder: string;
    country: string;
    countryPlaceholder: string;
    pay: string;
  };
}

function CheckoutForm({ translations }: CheckoutFormProps) {
  const cart = useAppSelector(selectCartItems);
  const totalAmount = getTotalAmount(cart);
  return (
    cart &&
    cart.length > 0 && (
      <div className="grid gap-6 bg-gray-100 rounded-md p-4">
        <h2 className="text-2xl text-black font-semibold">{translations.title}</h2>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label htmlFor="phone" className="text-accent">
                {translations.phone}
              </Label>
              <Input
                id="phone"
                placeholder={translations.phonePlaceholder}
                type="text"
                name="phone"
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="address" className="text-accent">
                {translations.streetAddress}
              </Label>
              <Textarea
                id="address"
                placeholder={translations.addressPlaceholder}
                name="address"
                className="resize-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-1">
                <Label htmlFor="postal-code" className="text-accent">
                  {translations.postalCode}
                </Label>
                <Input
                  type="text"
                  id="postal-code"
                  placeholder={translations.postalCodePlaceholder}
                  name="postal-code"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="city" className="text-accent">
                  {translations.city}
                </Label>
                <Input
                  type="text"
                  id="city"
                  placeholder={translations.cityPlaceholder}
                  name="city"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="country" className="text-accent">
                  {translations.country}
                </Label>
                <Input
                  type="text"
                  id="country"
                  placeholder={translations.countryPlaceholder}
                  name="country"
                />
              </div>
            </div>
            <Button className="h-10">{translations.pay} {formatCurrency(totalAmount)}</Button>
          </div>
        </form>
      </div>
    )
  );
}

export default CheckoutForm;
