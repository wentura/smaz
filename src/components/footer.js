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
            hub@zodpovednavyuka.cz
          </Link>
          <Link href="tel:+420775554124" className="underline text-sm">
            +420 775 554 124
          </Link>
          <Link
            href="https://www.google.com/maps/place/Legion%C3%A1%C5%99%C5%AF+64%2F4,+276+01+M%C4%9Bln%C3%ADk/@50.3523219,14.4730207,17.83z/data=!4m6!3m5!1s0x470bddf957aace29:0x85a034ab59bc61a0!8m2!3d50.3524273!4d14.4736485!16s%2Fg%2F11c24zjfsp"
            target="_blank"
            className="underline text-sm"
          >
            Legionářů 64, Mělník
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
