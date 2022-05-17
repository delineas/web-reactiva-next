import { getFeedItemsIds, getFeedItemData } from "../../lib/feed";

export async function getStaticProps({ params }) {
  console.log(params);
  const episode = await getFeedItemData(params.slug);
  return {
    props: {
      episode,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getFeedItemsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Episode({ episode }) {
  return <h1>{episode.title}</h1>;
}
