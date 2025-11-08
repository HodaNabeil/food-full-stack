import { getProductsByCategory } from "@/features/menu/hooks/useQueries";
import ItemMenu from "@/features/menu/hooks/components/ItemMenu";

export default async function MenuPage() {
  const categories = await getProductsByCategory();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>

      {categories.map((category) => (
        <section key={category.id} className="mb-16">
          {/* Category Title */}
          <h2 className="text-3xl element-center italic text-primary font-semibold mb-8 pb-4">
            {category.name}
          </h2>

          {/* Products Grid */}
          {category.products && category.products.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <ItemMenu item={product} key={product.id} />
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center py-10">
              <p className="text-center text-gray-600 italic">
                No products available in this category.
              </p>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
