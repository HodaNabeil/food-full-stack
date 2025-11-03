import { fetchProducts } from "../hooks/useProductsQueries";
import ItemMenu from "./ItemMenu";

export default async function Menu() {
  const bestSellers = await fetchProducts(3);

  return (
    <>
      {bestSellers && bestSellers.length > 0 ? (
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-4">
          {bestSellers.map((item, index) => (
            <ItemMenu item={item} key={index} />
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center py-10">
          <p className="text-center text-gray-600 italic">
            No best sellers available.
          </p>
        </div>
      )}
    </>
  );
}
