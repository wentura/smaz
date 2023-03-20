import Image from "next/image";
import Link from "next/link";

export default function Actions({ allActions }) {
  return (
    <div className="mb-40" id="akce">
      <div className="pt-32">
        <h2 className="uppercase text-xl md:text-4xl text-center pb-16 nadpis font-extrabold">
          plánované akce
        </h2>
      </div>
      <div className="flex flex-col md:flex-row  mx-auto flex-wrap items-center md:justify-center">
        {allActions.nodes.map((post) => (
          <div
            className="mb-24 m-2 w-[300px] md:w-[350px] bg-gray-500 h-[300px] md:h-[350px] relative flex justify-center "
            key={post.id}
          >
            <div className="overflow-hidden h-full w-full">
              <Image
                alt="test"
                className="w-full h-full overflow-hidden"
                src={post.featuredImage.node.sourceUrl}
                width={post.featuredImage.node.mediaDetails.width}
                height={post.featuredImage.node.mediaDetails.height}
              />
            </div>
            <Link
              href={`/akce/${post.slug}`}
              className="bg-neutral-100 h-40 w-4/5 mx-auto bottom-[-50px] absolute text-center flex flex-col justify-center items-center opacity-95 drop-shadow-2xl"
            >
              <p className="self-start font-bold text-xs p-4">
                {post.kalendarAkci.datumAkce}
              </p>
              <div className="text-xl md:text-4xl nadpis font-extrabold">
                {post.title}
              </div>
              <div className="flex w-full justify-between p-4 text-xs">
                <div className="underline">ukaž víc</div>
                <div>{post.kalendarAkci.vstupne} Kč</div>
              </div>
            </Link>
          </div>
        ))}

        {/* <div className="flex-1 m-4">
          <div className="bg-slate-300 flex flex-col items-center relative">
            <img
              src="https://dummyimage.com/400x300.jpg"
              alt=""
              className="w-full overflow-visible"
            />
            <div className="bg-neutral-100 h-40 w-4/5 absolute bottom-[-50px] text-center flex flex-col justify-center items-center">
              <div>
                <h3>nejaky nadpis</h3>
              </div>
              <a
                href="#"
                className="m-4 w-44 text-center py-2 bg-cta rounded-full cursor-pointer uppercase"
              >
                link do pryc
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
