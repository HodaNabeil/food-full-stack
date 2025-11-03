import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="padding-section">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-foreground capitalize font-black text-2xl md:text-4xl lg:text-4xl">
            Slice into Happiness
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            officiis earum nisi soluta ea iure quaerat incidunt debitis odio .
          </p>
          <div className="flex items-center gap-5 ">
            <Button className="cursor-pointer hover:bg-destructive">
              Order Now
              <ArrowRightCircle></ArrowRightCircle>
            </Button>

            <Button className="bg-[#eee] hover:!bg-gray-50  text-foreground cursor-pointer">
              Order Now
              <ArrowRightCircle></ArrowRightCircle>
            </Button>
          </div>
        </div>

        <div className="relative ">
          <Image
            src={"/assets/images/pizza.png"}  
            alt="hero"
            fill
            priority
            loading="eager"
            className="object-contain"
          />
        </div>
      </div>
      ;
    </section>
  );
}
