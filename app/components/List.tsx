"use client";

import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface Props {
  title: string;
  link?: string;
  children: JSX.Element[];
}

export function List({ title, link, children }: Props) {
  const slideId = "slider";
  const slide = (direction: "left" | "right") => {
    const items = document.getElementById(slideId) as HTMLElement;
    let amount = 700;
    if (direction === "left") {
      amount *= -1;
    }
    items.scrollLeft += amount;
  };
  return (
    <>
      <div className="list-header">
        <h1>{title}</h1>
        {true && <Link href={"/"}>View All</Link>}
      </div>
      <div className="list-content">
        <BsChevronCompactLeft
          size="2rem"
          className="chevron"
          onClick={() => slide("left")}
        />
        <div id={slideId} className="items">
          {children}
        </div>
        <BsChevronCompactRight
          size="2rem"
          className="chevron"
          onClick={() => slide("right")}
        />
      </div>
    </>
  );
}
