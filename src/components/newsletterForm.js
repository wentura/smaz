const newsletter = "test";

export default function NewsletterForm({ newsletter }) {
  return (
    <div className="w-full bg-neutral-100">
      <div className="container mx-auto flex flex-col justify-center items-center h-80">
        <div>
          <h2 className="nadpis md:text-4xl uppercase text-xl">
            přihlaste se k odběru novinek
          </h2>
        </div>
        <div>
          <h3>{newsletter}</h3>
        </div>
        <div>
          <form className="flex flex-col md:flex-row py-8 gap-2 text-sm">
            <input
              type="text"
              id="formName"
              className="p-2 rounded-full w-56 uppercase text-center"
              placeholder="jméno a to je už moc"
            />
            <input
              type="mail"
              id="formMail"
              className="p-2 rounded-full w-56 uppercase text-center"
              placeholder="e-mail"
            />
            <input
              type="submit"
              id="formSend"
              className="p-2 rounded-full w-56 uppercase text-center bg-cta"
              value="přihlásit se"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
