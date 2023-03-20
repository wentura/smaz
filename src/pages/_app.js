import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NewsletterForm from "@/components/newsletterForm";
import "@/styles/globals.css";
import "@/styles/output.css";
import "@/styles/style.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Hero />
      <Component {...pageProps} />

      <NewsletterForm />
      <Footer />
    </>
  );
}
