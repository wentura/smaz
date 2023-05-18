import Image from "next/image";
import Link from "next/link";

export default function VypisAkci() {
  return (
    <>
      <div className="pt-20 pb-12" id="akce">
        <h3 className="uppercase text-xl md:text-2xl xl:text-4xl pb-2 xs:pb-4 nadpis text-center">
          KALENDÁŘ AKCÍ
        </h3>
        <div className="mx-auto max-w-[600px] p-2">
          <p className="text-center text-sm ">
            Buďte odvážní a přijďte načerpat informace
            <span className="sm:hidden">.</span>
            <span className="hidden sm:inline">
              &nbsp;z nějaké úplně nové oblasti.
              <br />
              Zajímá vás zdraví, příroda, výchova, péče o tělo, osobní rozvoj.
            </span>
            <br />
            Nakoukněte do kalendáře. Vyberte a doražte.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-8">
        <div className="flex-1">
          <Image
            src="/bylinkove_setkani.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                Cyklus tří setkání: 20.4., 16.5., 15.6. 2023{" "}
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Bylinková setkání
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Cyklus setkání nabízí ucelený pohled do světa bylin pro úplné
                začátečníky, ale i pokročilí bylinkáři si mohou odnést čerstvé
                poznatky, mnohdy vědecky potvrzené účinky rostlin.
              </p>
              <Link
                href="/bylinkova_setkani"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row my-8 md:flex-row-reverse">
        <div className="flex-1">
          <Image
            src="/zdrava_snidane_pro_silne_traveni.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                18.5. 2023 17:30-20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Zdravá snídaně pro silné trávení
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Zveme Vás na pravidelné setkávání s tradiční čínskou medicínou
                (TČM). Tentokrát na téma “zdravá snídaně pro silné trávení”.
              </p>
              <Link
                href="/zdrava_snidane_pro_silne_traveni"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-8">
        <div className="flex-1">
          <Image
            src="/cyklicnost_zeny.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                23.5. 2023 17:30-20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Cykličnost ženy a ženská bylinná napářka
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Pojďte se potkat v kruhu s ostatními ženami a sama se sebou.
                <br />
                Každá z nás je jedinečná, přesto máme mnoho společného.
              </p>
              <Link
                href="/cyklicnost_zeny"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-8 md:flex-row-reverse">
        <div className="flex-1">
          <Image
            src="/masaze_vlastnima_rukama.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                25.5. 2023 18:00-20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Masáž vlastníma rukama
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Staňte se sama/sám sobě masérem a ulevte si od bolesti. Za večer
                toho stihneme opravdu hodně.
              </p>
              <Link
                href="/masaz_vlastnima_rukama"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>

              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row my-8">
        <div className="flex-1">
          <Image
            src="/cyklicnost_zeny.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                30.5. 2023 17:30-20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Homeopatie rostlin
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Chcete pěstovat zdravé rostliny pomocí homeopatie?
                <br />
                Zkuste úspěšně pěstovat rostliny bez chemických prostředků.
              </p>
              <Link
                href="/homeopatie_rostlin"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-8 md:flex-row-reverse">
        <div className="flex-1">
          <Image
            src="/networking.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                31. 5. 2023 17:30-19:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Networking: Můj projekt
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Máte svůj projekt v hlavě a váháte, jak a kde začít?
                <br />
                Máte svůj projekt na papíře a sbíráte odvahu vykročit?
              </p>
              <Link
                href="/networking_muj_projekt"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>

              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row-reverse my-8">
        <div className="flex-1">
          <img
            src="https://dummyimage.com/800x600.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center px-2 md:px-20">
              <h4 className="uppercase font-bold text-xs">malý nadpis</h4>
              <h3 className="uppercase font-mono font-extrabold lg:text-3xl xs:pb-4 nadpis">
                vetsi nadpis hub pismem
              </h3>
              <p className="text-start leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                sapiente nihil amet porro sed libero a quae fugiat error dolores
                quidem est corporis accusamus, quos veniam.
              </p>
              <a
                href="#"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase"
              >
                link do pryc
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
