import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-tmavaCta via-svetlaCta to-tmavaCta w-full">
      <div className="container mx-auto flex items-center h-44 justify-between">
        <div className="font-mono text-4xl md:pl-4">
          <Link href="/">
            <Image src="/../public/logo.png" width={250} height={200} alt="" />
          </Link>
        </div>
        <div className="flex flex-col flex-1 ml-20 md:ml-44 font-light">
          <ul className="flex uppercase justify-between pr-2 md:pr-4">
            <li>HUB</li>
            <li>e-shop</li>
            <li>kalendář akcí</li>
            <li>kontakt</li>
          </ul>
          <div className="pt-4 flex justify-end items-center">
            <div className="flex flex-col flex-1 ">
              <div>&nbsp;</div>
              <div className="border-0 border-t border-neutral-800 mr-8">
                &nbsp;
              </div>
            </div>
            <ul className="flex uppercase justify-between gap-8 pr-2 md:pr-4">
              <li>FB</li>
              <li>IG</li>
              <li>YT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
