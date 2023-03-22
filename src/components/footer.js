import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="bg-gradient-to-r from-tmavaCta via-svetlaCta to-tmavaCta"
      id="kontakt"
    >
      <div className=" min-h-64 max-w-3xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start py-12 gap-4 md:justify-between container  mx-auto">
        <div className="flex flex-col gap-2">
          <Link href="https://www.zodpovednavyuka.cz/">E-shop</Link>{" "}
          <Link href="/#akce">Kalendář akcí</Link>
          <Link href="/showroom">Showroom</Link>
          <Link href="/hub">Zodpovědný hub</Link>
          {/* <Link href="#">#</Link> */}
        </div>
        {/* <div className="flex flex-col gap-2">
          <Link href="#">#</Link>
          <Link href="#">#</Link>
        </div> */}
        <div className="flex flex-col gap-2">
          Kateřina Hrabíková
          <Link
            href="mailto:info@zodpovednavyuka.cz"
            className="underline text-sm"
          >
            info@zodpovednavyuka.cz
          </Link>
          <Link href="tel:+420775554124" className="underline text-sm">
            +420 775 554 124
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-[10px]">
          provozovatel
          <br />
          SPARRING SHOPS, s.r.o.
          <br />
          José Martího 269, 162 00 Praha 6
          <br />
          IČ: 09417427
          <br />
          DIČ: CZ09417427
          <br />
          <span className="text-[8px]">
            Společnost zapsána v obchodním rejstříku vedeného
            <br /> městským soudem v Praze oddíl C, vložka 336069.
            <br />
            Jsme plátci DPH.
          </span>
        </div>
      </div>
      <div className="">
        <ul className="flex justify-center gap-6">
          <li>
            <a href="https://www.facebook.com/zodpovednavyuka" target="_blank">
              <Image
                src="/icons8-facebook.svg"
                alt="FB"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/zodpovednavyuka/"
              target="_blank"
            >
              <Image
                src="/icons8-instagram.svg"
                alt="FB"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@zodpovednavyuka9474"
              target="_blank"
            >
              <Image
                src="/icons8-youtube-logo.svg"
                alt="FB"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-md text-center py-8">
        Zodpovědná výuka, Zodpovědný Hub &copy; 2023 <br />
        <span className="text-xs underline">
          vytvořil{" "}
          <a href="https://www.zbyneksvoboda.cz/" target="_blank">
            Zbyněk Svoboda
          </a>
        </span>
      </div>
    </div>
  );
}
