import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="bg-gradient-to-r from-tmavaCta via-svetlaCta to-tmavaCta"
      id="kontakt"
    >
      <div className=" min-h-64 max-w-xl flex flex-col md:flex-row items-center py-12 gap-4 md:justify-between container  mx-auto">
        <div className="flex flex-col gap-2">
          <Link href="https://www.zodpovednavyuka.cz/">E-shop</Link>{" "}
          <Link href="/#akce">Kalendář akcí</Link>
          {/* <Link href="#">#</Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/showroom">Showroom</Link>
          <Link href="/hub">Zodpovědný hub</Link>
          {/* <Link href="#">#</Link> */}
          {/* <Link href="#">#</Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#">#</Link>
          <Link href="#">#</Link>
        </div>
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
