import Image from "next/image";
import Link from "next/link";
import Benefit from "./benefit";
export default function Clanky() {
  return (
    <div>
      <div className="flex flex-col md:flex-row my-8">
        <div className="flex-1">
          <Image
            src="/eshop_foto.jpg"
            alt=""
            width="600"
            height="400"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                vyberte si z naší široké nabídky
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis">
                E-shop zodpovědná výuka
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Obchod, který nabízí řešení učitelům a rodičům, kteří chtějí čas
                s dětmi využít smysluplně a radostně. Nabízí výukové hry a
                materiály pro děti prvního stupně ZŠ.
              </p>
              <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse my-8">
        <div className="flex-1">
          <Image
            src="/showroom.jpg"
            alt="showroom"
            width="600"
            height="400"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center px-2 md:px-20">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                uprostřed mělníka
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis">
                SHOWROOM
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Vydejte se k nám do nově otevřeného showroomu. Většinu pomůcek
                či her od zodpovědné výuky si můžete rovnou vyzkoušet a zahrát.
                Můžete si tu vyzvednout svou objednávku z eshopu. Nebo se prostě
                jen zastavit a popovídat.
              </p>
              <Link
                href="/showroom"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                vstupte
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Benefit />
    </div>
  );
}
