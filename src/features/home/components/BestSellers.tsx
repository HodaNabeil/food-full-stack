import TopMainHeader from "@/components/shared/top-main-header";
import Menu from "./Menu";

export default function BestSellers() {
  return (
    <section>
      <div className="container">
        <div className="element-center flex-col ">
         <TopMainHeader subTitle="Check out" title='Our Best Sellers'/>
        </div>
        <Menu />
      </div>
    </section>
  );
}
