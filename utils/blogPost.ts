import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";


const client = createClient({
  space: "bz0oupashgdm",
  accessToken: "TpWQUVefv2K0Dh9p4jyTc5PcyJBHBnrAHBP_ckyZj5Q",
});

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "blog",
  });

  return response.items;
};
