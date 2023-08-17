"use client";
import { createClient } from "contentful";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "" ;

export const test = () => {
  console.log(spaceId)
  console.log(accessToken)
}


const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "blog",
  });

  return response.items;
};
