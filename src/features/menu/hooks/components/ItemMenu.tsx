import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import AddToCard from "./AddToCard";
import { ProductWithRelations } from "@/types/product";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function ItemMenu({ item }: { item: ProductWithRelations }) {
  const locale = await getCurrentLocale();
  const { menuItem } = await getTrans(locale);

  return (
    <li className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority
          loading="eager"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="text-center mt-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <span className="text-gray-600"> {formatCurrency(item.basePrice)}</span>
      </div>

      <p className="text-sm text-gray-500 mt-1 text-center">
        {item.description}
      </p>

      <div className="flex justify-center pb-4">
        <AddToCard item={item} translations={menuItem} />
      </div>
    </li>
  );
}
