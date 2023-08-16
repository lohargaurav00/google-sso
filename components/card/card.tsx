import * as React from "react";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import clsx from "clsx";

import style from "./card.module.css";
import { CardPropsType } from "@/types";

const Card: React.FC<CardPropsType> = ({
  src,
  heading,
  shortDescription,
  description,
}) => {
  const [active, setActive] = React.useState<boolean>(false); //using this state to toggle the card
  return (
    <div className={style.card}>
      <div
        className={clsx([
          style.card_collapse,
          { [style.card_collapse_active]: active },
        ])}
      >
        <Image
          src={src}
          alt="image"
          width={300}
          height={200}
          className={style.card_image}
        />
        <div className={style.card_content}>
          <div className={style.card_header}>{heading}</div>
          <div className={style.card_shortdes}>{shortDescription}</div>
          <button
            className={style.card_button}
            onClick={() => setActive(!active)}
          >
            View More
            <RiArrowDownSLine
              className={clsx([
                style.button_icon,
                { [style.button_icon_active]: active },
              ])}
            />
          </button>
        </div>
      </div>
      <div
        className={clsx([
          style.card_description,
          { [style.card_description_active]: active },
        ])}
      >
        {description}
      </div>
    </div>
  );
};

export default Card;
