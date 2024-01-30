import Image from "next/image";
import Link from "next/link";

export default function VypisAkci() {
  return (
    <>
      <div className="pt-20 pb-12" id="akce">
        <h3 className="text-md md:text-xl xl:text-2xl pb-2 xs:pb-4 nadpis text-center hover:scale-110 transition duration-500 ease-linear">
          <a
            href="https://www.facebook.com/groups/785835472952121"
            target="_blank"
            className="underline underline-offset-4 drop-shadow-md  "
          >
            aktuální akce najdete na Zodpovědný hub (Facebook)
          </a>
        </h3>
      </div>{" "}
    </>
  );
}
