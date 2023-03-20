import Footer from "./footer";
import Hero from "./hero";

export default function Layout({ children }) {
  return (
    <>
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  );
}
