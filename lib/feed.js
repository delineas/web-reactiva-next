import siteMetadata from "../data/siteMetada";
import Parser from "rss-parser";
import slugify from "slugify";
const parser = new Parser();

export async function getFeedItems(feedUrl) {
  const feed = await parser.parseURL(feedUrl);
  return feed.items.map((item) => {
    return {
      ...item,
      slug: slugify(item.title, {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "es",
        trim: true,
      }),
    };
  });
}

export async function getFeedItemData(slug) {
  const feedItems = await getFeedItems(siteMetadata.feed);
  const item = feedItems.find((item) => item.slug === slug);
  return item;
}

export async function getFeedItemsIds() {

  const feedItems = await getFeedItems(siteMetadata.feed);
  return feedItems.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
}
