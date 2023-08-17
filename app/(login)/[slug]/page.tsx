"use client";
import * as React from "react";
import { LoginContext } from "@/context";
import { notFound } from "next/navigation";
import Image from "next/image";

import style from "./page.module.css";
import { Card } from "@/components";
import { getBlogPosts} from "@/utils";


interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const { slug } = params; //destructing slug from params

  //using context to access user profile with destructuring
  const { userProfile } = React.useContext(LoginContext) as any;
  const [blogs, setBlogs] = React.useState<any[]>([]);

  //fetching blogs from contentful
  React.useEffect(() => {
    getBlogPosts().then((res) => {
      setBlogs(res);
    });
  }, []);

  // if userProfile null or  userProfile.sub value not equal to the slug router then return page not found
  if (!userProfile || userProfile.sub !== slug) {
    return notFound();
  }

  return (
    <div className={style.container}>
      <div className={style.details}>
        <Image
          src={userProfile.picture}
          alt="profile picture"
          width={200}
          height={200}
          className={style.image}
        />
        <div className={style.content}>
          <span className={style.content_label}>Name</span>
          <div className={style.content_name}>{userProfile.name}</div>
        </div>
        <div className={style.content}>
          <span className={style.content_label}>Email</span>
          <div className={style.content_name}>{userProfile.email}</div>
        </div>
      </div>
      <div className={style.cards_container}>
        {/* 
        @contentful blogs
        destructuring the userProfile from the response for card component
        heading = blogs.fields.title
        description = blogs.fields.blogText
        shortDescription = blogs.fields.description.content[0].content[0].value
        src = blogs.fields.image.fields.file.url 
      */}
        {blogs.map((blog, index) => {
          return (
            <Card
              key={index}
              heading={blog.fields.title}
              src={`https:${blog.fields.image.fields.file.url}`}
              description={blog.fields.blogText}
              shortDescription={
                blog.fields.description.content[0].content[0].value
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
