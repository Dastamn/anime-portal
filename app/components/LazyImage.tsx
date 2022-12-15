"use client";

import { loadDomAnimation } from "#root/lib/motion";
import { LazyMotion, m } from "framer-motion";
import { default as Image, ImageProps } from "next/image";
import { useState } from "react";

const variants = {
  false: { opacity: 0 },
  true: { opacity: 1 },
};

export default function LazyImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const { alt } = props;

  return (
    <LazyMotion features={loadDomAnimation} strict>
      <m.div
        animate={String(loaded)}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <Image {...props} alt={alt} onLoadingComplete={() => setLoaded(true)} />
      </m.div>
    </LazyMotion>
  );
}
