import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";
import fetcher from "../../../lib/fetcher";
import {
  ACTION_BY_SLUG,
  ALL_ACTIONS_WITH_SLUG,
} from "../../../lib/wordpress/api";

export default function Action({ postData }) {
  // const action = ({ postData }) => {
  const actionPost = postData.data.post;
  if (!Router.isFallback && !actionPost?.slug) {
    return { notFound: true };
  }
  return (
    <div>
      {Router.isFallback ? (
        <div>Nacitam....</div>
      ) : (
        <div>
          <Image
            src={actionPost.featuredImage.node.sourceUrl}
            height={actionPost.featuredImage.node.mediaDetails.height}
            width={actionPost.featuredImage.node.mediaDetails.width}
            alt=""
          />
          <div dangerouslySetInnerHTML={{ __html: actionPost.title }} />
          <div dangerouslySetInnerHTML={{ __html: actionPost.excerpt }} />
          <div dangerouslySetInnerHTML={{ __html: actionPost.content }} />
          <div
            dangerouslySetInnerHTML={{
              __html: actionPost.kalendarAkci.datumAkce,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: actionPost.kalendarAkci.casAkce,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: actionPost.kalendarAkci.cislobanky,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: actionPost.kalendarAkci.cislopreductu,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: actionPost.kalendarAkci.cislouctu,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: actionPost.kalendarAkci.vstupne,
            }}
          />
          <Link href="/#akce">zpet na akce</Link>
        </div>
      )}
    </div>
  );
}

// export default action;
export async function getStaticPaths() {
  const res = await fetcher(ALL_ACTIONS_WITH_SLUG);
  const allActions = await res.data.posts.nodes;
  return {
    paths: allActions.map((action) => `/akce/${action.slug}`) || [],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const variables = {
    id: params.slug,
    idType: "SLUG",
  };
  const data = await fetcher(ACTION_BY_SLUG, { variables });
  return {
    props: {
      postData: data,
    },
  };
}
