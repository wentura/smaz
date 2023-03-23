export default function Benefit() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap xl:w-4/5 mx-auto md:my-12">
      <div className="flex-1 h-44 p-16 m-4 bg-cta rounded-tl-4xl rounded-br-4xl flex justify-center items-center">
        <div className="text-4xl nadpis font-extrabold text-center">originální pomůcky</div>
      </div>

      <div className="flex-1 h-44 p-16 m-4 bg-cta rounded-tl-4xl rounded-br-4xl flex justify-center items-center">
        <div className="text-4xl nadpis font-extrabold text-center">
          společné vzdělávání
        </div>
      </div>

      <div className="flex-1 h-44 p-16 m-4 bg-cta rounded-tl-4xl rounded-br-4xl flex justify-center items-center">
        <div className="text-4xl nadpis font-extrabold text-center">osobní odběr</div>
      </div>
    </div>
  );
}
