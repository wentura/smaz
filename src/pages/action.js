import Link from "next/link";
import fetcher from "../../lib/fetcher";
import { ALL_ACTIONS } from "../../lib/wordpress/api";
import { compress } from "../../next.config";

const action = ({ allActions }) => {
  const actions = allActions;

  return (
    <div>
      actions
      <main>
        <div>
          {actions.map((action) => {
            return (
              <>
                <h3 key={action.slug}>{action.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: action.comments.nodes[0].content,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: action.excerpt,
                  }}
                />
                <Link href={`/akce/${action.slug}`}> vice o akci</Link>
              </>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default action;
export async function getStaticProps() {
  const res = await fetcher(ALL_ACTIONS);
  const allActions = res.data.posts.nodes;
  return {
    props: { allActions },
    revalidate: 1,
  };
}
