import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const fetchProducts = cache(
  async (limit?: number | undefined) => {
    const bestSellers = await db.product.findMany({
      orderBy: {
        orders: {
          _count: "desc",
        },
      },
      include: {
        size: true,
        extras: true,
      },
      take: limit,
    });
    return bestSellers;
  },
  ["best-sellers"],
  { revalidate: 3600 }
);
