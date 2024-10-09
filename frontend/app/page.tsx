import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between pt-24 bg-green-600">
      
        <div className="flex flex-col gap-36">
          <Image
            className="ml-52 animate-bouncing"
            src="/ProductImages/circles/alfredo (1).png"
            alt="Alfredo"
            width={200}
            height={200}
            style={{ animationDelay: '200ms'}}

          />
          <Image
            src="/ProductImages/circles/falafel (1).png"
            alt="Alfredo"
            width={200}
            height={200}
            className="ml-20 animate-bouncing"
            style={{ animationDelay: '600ms'}}
          />
        </div>

        <div className="flex flex-col gap-8 items-center pt-8">
          <h1 className="font-bold text-8xl">Freshbite</h1>
          <h2 className="font-semibold text-4xl">Convenience Meets Healthy Living</h2>
          <Button>To Products</Button>
          <Image
          src={"/HeroSection/heropic.avif"}
          alt="mealPrepBox"
          width={800}
          height={200}
          className="mt-64"
          />
        </div>

        <div className="flex flex-col gap-64 items-end pt-10">
          <Image
          className="mr-56 animate-bouncing animation-delay-0"
            src="/ProductImages/circles/beef (1).png"
            alt="Alfredo"
            width={200}
            height={200}
            style={{ animationDelay: '0ms'}}
          />


          <Image
          className="mr-28 animate-bouncing"
            src="/ProductImages/circles/teryaki (2).png"
            alt="Alfredo"
            width={200}
            height={200}
            style={{ animationDelay: '400ms'}}
          />
        </div>

      </div>
    </div>
  );
}
