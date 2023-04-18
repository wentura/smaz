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
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
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
            src="/henna.jpg"
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
                4.5. 2023 17:30-20:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Henna – umění na těle
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Henna je nejstarší 100% přírodní barvivo na světě, jež už kdysi
                zdobilo krásnou Nefertiti či okouzlující Kleopatru. Pojďte se
                také ozdobit hennou.
              </p>
              <Link
                href="/henna"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
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
            src="/rodicovstvi_v_pohode.jpg"
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
                9.5. 2023 17:30-20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Rodičovství v pohodě (konstelace)
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Konstelace přináší možnosti, jak nahlédnout na věci, které v
                našem životě nefunguj tak, jak bychom si přáli. Pojďte to
                vyzkoušet.{" "}
              </p>
              <Link
                href="/rodicovstvi_v_pohode"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
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
            src="/jarmark_svobodne_skoly.jpg"
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
                13.5. 2023 8:00-12:00{" "}
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Jarmak dětí svobodné školy Safira
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Zajímá Vás, jak probíhá svobodné vzdělávání v praxi? Přijďte si
                o tom popovídat.
              </p>
              <Link
                href="/jarmark_svobodne_skoly"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
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
            src="/montessori_doma.jpg"
            alt="jak na Montessori vzdělávání doma"
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                15.5. 2023 17:30-19:30{" "}
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Jak na Montessori doma?
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                Připadá Vám, že je složité montessori principy využívat doma,
                ale přesto Vás to táhne? Přijďte a uvidíte, že to tak není.
              </p>
              <Link
                href="/jak_na_montessori_doma"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
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
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
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
            src="/masaze_vlastnima_rukama.jpg"
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
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
              >
                více informací
              </Link>
              {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md"
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
