import ItemMenu from "./ItemMenu";
import { db } from "@/lib/prisma";

export default async function Menu() {
  const bestSellers = await db.product.findMany({
    include: {
      Exra: true,
      size: true,
    },
  });

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-4">
      {bestSellers.map((item, index) => (
        <ItemMenu item={item} key={index} />
      ))}
    </ul>
  );
}
