import Link from "next/link";

function createMarkup(content) {
  return { __html: content };
}

export default function EpisodeItem({ episode, handleEpisodeClick }) {
  return (
    <div>
      <h3>
        <Link href={`/episode/${episode.slug}`}>{episode.title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={createMarkup(episode.content)} />
      <button onClick={() => handleEpisodeClick(episode.enclosure.url)}>
        Play
      </button>
    </div>
  );
}
