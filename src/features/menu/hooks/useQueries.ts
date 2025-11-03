import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getProductsByCategory = cache(
  async () => {
    const products = await db.category.findMany({
      include: {
        products: {
          include: {
            size: true,
            extras: true,
          },
        },
      },
    });
    return products;
  },
  ["products"],
  { revalidate: 3600 }
);
