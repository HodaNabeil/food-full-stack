import TopMainHeader from "@/components/shared/top-main-header";
import Menu from "../../menu/hooks/components/Menu";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function BestSellers() {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { bestSeller } = home;

  return (
    <section>
      <div className="container">
        <div className="element-center flex-col ">
          <TopMainHeader subTitle={bestSeller.checkOut} title={bestSeller.OurBestSellers} />
        </div>
        <Menu />
      </div>
    </section>
  );
}
