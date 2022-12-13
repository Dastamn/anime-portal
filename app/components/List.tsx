"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface Props {
  title: string;
  link?: string;
  children: JSX.Element[];
}

export function List({ title, link, children }: Props) {
  const slideId = "slider";

  useEffect(() => {
    const slider = document.getElementById(slideId) as HTMLElement;
    updateState(slider);
  }, []);

  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);

  const updateState = (target: EventTarget & HTMLElement) => {
    const { scrollWidth, clientWidth, scrollLeft, offsetWidth } = target;
    if (scrollWidth === clientWidth) {
      setHideLeft(true);
      setHideRight(true);
    } else if (scrollLeft === 0) {
      setHideLeft(true);
    } else if (scrollWidth - (scrollLeft + offsetWidth) < 1) {
      setHideRight(true);
    } else {
      setHideLeft(false);
      setHideRight(false);
    }
  };

  const getButtonStyle = (hidden: boolean) =>
    hidden ? { cursor: "auto", opacity: 0 } : {};

  const slide = (direction: "left" | "right") => {
    const slider = document.getElementById(slideId) as HTMLElement;
    let amount = 700;
    if (direction === "left") {
      amount *= -1;
    }
    slider.scrollLeft += amount;
  };

  return (
    <>
      <div className="list-header">
        <h1>{title}</h1>
        {link && <Link href={link}>View All</Link>}
      </div>
      <div className="list-content">
        <button
          className="left"
          style={getButtonStyle(hideLeft)}
          onClick={() => slide("left")}
        >
          <BsChevronCompactLeft />
        </button>
        <div
          id={slideId}
          className="items"
          onScroll={e => updateState(e.currentTarget)}
        >
          {children}
        </div>
        <button
          className="right"
          style={getButtonStyle(hideRight)}
          onClick={() => slide("right")}
        >
          <BsChevronCompactRight />
        </button>
      </div>
    </>
  );
}
