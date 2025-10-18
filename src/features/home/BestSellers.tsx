import Menu from "./Menu";

export default function BestSellers() {
  return (
    <section>
      <div className="container">
        <div className="element-center flex-col ">
          <span className="text-accent uppercase font-bold">Check out </span>
          <h2 className="capitalize text-4xl font-bold italic text-primary">
            our Best Sellers
          </h2>
        </div>
        <Menu />
      </div>
    </section>
  );
}
