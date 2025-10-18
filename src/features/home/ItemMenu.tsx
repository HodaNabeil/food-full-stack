import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import AddToCard from "./AddToCard";
import { ProductWithRelations } from "@/types/product";

export default function ItemMenu({ item }: { item: ProductWithRelations }) {
  return (
    <li className="flex flex-col items-center p-4 border rounded-lg">
      <div className="relative w-32 h-32">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority
          loading="eager"
          className="object-contain"
        />
      </div>

      <div className="text-center mt-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <span className="text-gray-600"> {formatCurrency(item.basePrice)}</span>
      </div>

      <p className="text-sm text-gray-500 mt-1 text-center">
        {item.description}
      </p>

      <AddToCard item={item} />
    </li>
  );
}
