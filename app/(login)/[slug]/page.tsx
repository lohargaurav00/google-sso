"use client";
import * as React from "react";
import { LoginContext } from "@/context";
import { notFound } from "next/navigation";
import data from "./dummy.json";

import style from "./page.module.css";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const { slug } = params; //destructing slug from params

  //using context to access user profile with destructuring
  const { userProfile } = React.useContext(LoginContext) as any;

  //if userProfile null or  userProfile.sub value not equal to the slug router then return page not found
  // if (!userProfile || userProfile.sub !== slug) {
  //   return notFound();
  // }

  return (
    <div className={style.container}>
      <div className={style.details_container}>
        <div className={style.details}>
          <Image
            src={data.picture}
            alt="profile picture"
            width={200}
            height={200}
            className={style.image}
          />
          <div className={style.name}>{data.name}</div>
          <div className={style.email}>{data.email}</div>
        </div>
      </div>
      <div className={style.cards_container}>xyz</div>
    </div>
  );
};

export default Page;
