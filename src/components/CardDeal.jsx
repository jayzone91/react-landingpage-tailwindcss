import React from "react";

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

export default function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          cupiditate id sunt molestiae cumque ad omnis dolorem voluptate non
          aperiam.
        </p>

        <Button styles={`mt-10`} text="Get Started" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}
