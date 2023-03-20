import Link from "next/link";
import { useRouter } from "next/router";
import { oneAction } from "../../../lib/akceNahled";

export async function getServerSideProps(context) {
  const res = await fetch(`http://klient001.zbyneksvoboda.cz/graphql`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Akce({ data }) {
  return (
    <>
      <div>sdklfj</div>
      <div>{data}</div>
    </>
  );
}

// const Akce = () => {
// ! to je stary zapist

// export async function getStaticProps() {
//   const oneAction = await oneAction();
//   return {
//     props: {
//       oneAction: oneAction,
//     },
//     revalidate: 1,
//   };
// }

// export default function Akce({ oneAction }) {
//   const router = useRouter();
//   const { slug } = router.query;

//   return (
//     <>
//       <p>Route: {slug}</p>
//       {oneAction.nodes.map((action) => (
//         <p key={action.slug}>{action.title}</p>
//       ))}
//     </>
//   );
// }

// export const getServerSideProps = async (context) => {
//   // const res = await
// };

// export default Akce;
// ! parti to ke staremu zapisu
