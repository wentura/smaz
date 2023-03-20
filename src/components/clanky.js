import Image from "next/image";
import Benefit from "./benefit";
export default function Clanky() {
  return (
    <div>
      <div className="flex flex-col md:flex-row my-8">
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
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center px-2 md:px-20">
              <h4 className="uppercase font-light text-xs normalni">
                malý nadpis
              </h4>
              <h3 className="uppercase font-mono font-extrabold text-xl lg:text-4xl xs:pb-4 nadpis">
                větší nadpis správným písmem
              </h3>
              <p className="text-start leading-2 md:leading-7 text-xs md:text-base">
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
      </div>

      <div className="flex flex-col md:flex-row-reverse my-8">
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
      </div>

      <Benefit />
    </div>
  );
}
